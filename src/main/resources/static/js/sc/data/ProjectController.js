goog.provide('sc.data.ProjectController');

goog.require('goog.History');
goog.require('goog.events.EventTarget');
goog.require('goog.structs');

sc.data.ProjectController = function(databroker) {
    goog.events.EventTarget.call(this);

    this.databroker = databroker;
    this.history = new goog.History();
};

goog.inherits(sc.data.ProjectController, goog.events.EventTarget);

sc.data.ProjectController.PERMISSIONS = {
    'permission': '<http://vocab.ox.ac.uk/perm#hasPermissionOver>',
    'update': '<http://vocab.ox.ac.uk/perm#mayUpdate>',
    'read': '<http://vocab.ox.ac.uk/perm#mayRead>',
    'delete': '<http://vocab.ox.ac.uk/perm#mayDelete>',
    'augment': '<http://vocab.ox.ac.uk/perm#mayAugment>',
    'administer': '<http://vocab.ox.ac.uk/perm#mayAdminister>',
    'createChildren': '<http://vocab.ox.ac.uk/perm#mayCreateChildrenOf>'
};

sc.data.ProjectController.prototype.findProjects = function(user) {
    if (user == null) {
        user = this.databroker.user;
    }
    else {
        user = this.databroker.getResource(user);
    }

    return user.getProperties(sc.data.ProjectController.PERMISSIONS.permission);
};

sc.data.ProjectController.prototype.findUsersInProject = function(project) {
    if (project == null) {
        project = this.currentProject;
    }
    else {
        project = this.databroker.getResource(project);
    }

    var userUris = new goog.structs.Set();

    goog.structs.forEach(project.getReferencingResources(sc.data.ProjectController.PERMISSIONS.permission), function(user) {
        userUris.add(user.uri);
    }, this);

    return userUris.getValues();
};

sc.data.ProjectController.prototype.grantPermissionsToUser = function(user, project, permissions) {
    user = this.databroker.getResource(user || this.databroker.user);
    project = this.databroker.getResource(project || this.currentProject);

    goog.structs.forEach(permissions, function(permission) {
        user.addProperty(permission, project);
    }, this);

    if (!user.hasProperty(sc.data.ProjectController.PERMISSIONS.permission, project)) {
        user.addProperty(sc.data.ProjectController.PERMISSIONS.permission, project);
    }
};

sc.data.ProjectController.prototype.grantAllPermissionsToUser = function(user, project) {
    return this.grantPermissionsToUser(user, project, goog.structs.getValues(sc.data.ProjectController.PERMISSIONS));
};

sc.data.ProjectController.prototype.revokePermissionsFromUser = function(user, project, permissions) {
    user = this.databroker.getResource(user || this.databroker.user);
    project = this.databroker.getResource(project || this.currentProject);

    goog.structs.forEach(permissions, function(permission) {
        user.deleteProperty(permission, project);
    }, this);

    if (!(
        user.hasProperty(sc.data.ProjectController.PERMISSIONS.update, project) &&
        user.hasProperty(sc.data.ProjectController.PERMISSIONS.read, project) &&
        user.hasProperty(sc.data.ProjectController.PERMISSIONS.delete, project) &&
        user.hasProperty(sc.data.ProjectController.PERMISSIONS.augment, project) &&
        user.hasProperty(sc.data.ProjectController.PERMISSIONS.administer, project) &&
        user.hasProperty(sc.data.ProjectController.PERMISSIONS.createChildren, project)
    )) {
        user.deleteProperty(sc.data.ProjectController.PERMISSIONS.permission, project);
    }
};

sc.data.ProjectController.prototype.revokeAllPermissionsFromUser = function(user, project) {
    user = this.databroker.getResource(user || this.databroker.user);
    project = this.databroker.getResource(project || this.currentProject);

    goog.structs.forEach(sc.data.ProjectController.PERMISSIONS, function(permission) {
        user.deleteProperty(permission, project);
    }, this);
};

sc.data.ProjectController.prototype.canUserEditProject = function() {
   user = this.databroker.getResource(this.databroker.user);
   var admin = user.hasProperty(sc.data.ProjectController.PERMISSIONS.administer, this.currentProject);
   var update = user.hasProperty(sc.data.ProjectController.PERMISSIONS.update, this.currentProject);
   return (admin || update);
};

sc.data.ProjectController.prototype.userHasPermissionOverProject = function(user, project, opt_permission) {
    user = this.databroker.getResource(user || this.databroker.user);
    project = this.databroker.getResource(project || this.currentProject);

    var permission = opt_permission || sc.data.ProjectController.PERMISSIONS.permission;

    return user.hasProperty(permission, project);
};

sc.data.ProjectController.prototype.findProjectContents = function(project) {
    project = this.databroker.getResource(project || this.currentProject);

    var contentsInOrder = this.databroker.getListUrisInOrder(project);

    if (contentsInOrder.length > 0) {
        return contentsInOrder;
    }
    else {
        contentsInOrder = project.getProperties('ore:aggregates');
        this.databroker.sortUrisByTitle(contentsInOrder);
        return contentsInOrder;
    }
};

sc.data.ProjectController.prototype.selectProject = function(project) {
    project = this.databroker.getResource(project);

    if (!project.equals(this.currentProject)) {
        this.currentProject = project;

        if (!this.databroker.user.getOneUnescapedProperty('dm:lastOpenProject') != this.currentProject.bracketedUri) {
            this.databroker.user.setProperty('dm:lastOpenProject', this.currentProject.bracketedUri);
        }

        this.history.setToken(sc.data.ProjectController.projectShortcut(this.currentProject.uri));
        this.fireProjectSelected();
        return true;
    }
    else {
        return false;
    }
};

sc.data.ProjectController.prototype.linkedProject = function() {
    var linkedProject = this.history.getToken();
    if (!linkedProject) {
        return undefined;
    }
    return this.findProjects()
        .filter(function(project) { return sc.data.ProjectController.projectShortcut(project) == linkedProject; })
        .shift();
}

sc.data.ProjectController.prototype.autoSelectProject = function(user) {
    user = this.databroker.getResource(user || this.databroker.user);

    var linkedProject = this.linkedProject();
    if (linkedProject) {
        this.selectProject(linkedProject);
        return true;
    }

    var lastOpened = user.getOneProperty('dm:lastOpenProject');
    if (lastOpened) {
        this.selectProject(lastOpened);
        return true;
    }

    return false;
};

sc.data.ProjectController.projectShortcut = function(uri) {
    var start = uri.lastIndexOf(":") + 1;
    return uri.substring(start, Math.min(start + 8, uri.length));
};

sc.data.ProjectController.prototype.currentProjectShortcut = function() {
    var currentProject = this.getCurrentProject();
    return currentProject ? sc.data.ProjectController.projectShortcut(currentProject.uri) : undefined;
}

sc.data.ProjectController.prototype.getCurrentProject = function() {
   return this.currentProject;
};

sc.data.ProjectController.prototype.fireProjectSelected = function() {
    var event = new goog.events.Event('projectSelected', this);
    event.project = this.currentProject;
    this.dispatchEvent(event);
};

sc.data.ProjectController.prototype.addResourceToProject = function(resource, project) {
    project = this.databroker.getResource(project || this.currentProject);
    resource = this.databroker.getResource(resource);

    project.addProperty('ore:aggregates', resource.bracketedUri);
};

sc.data.ProjectController.prototype.createProject = function(uri) {
    var project = this.databroker.createResource(uri);

    goog.structs.forEach(sc.data.DataModel.VOCABULARY.projectTypes, function(type) {
        project.addType(type);
    }, this);

    this.grantAllPermissionsToUser(this.databroker.user, project);

    return project;
};

sc.data.ProjectController.prototype.getCanvasUploadUrl = function() {
    return this.databroker.syncService.restUrl(this.currentProject.uri, sc.data.SyncService.RESTYPE.canvas) + '/create';
};

sc.data.ProjectController.prototype.uploadCanvas = function(title, file, opt_successHandler, opt_errorHandler, opt_progressHandler) {
    var data = new FormData();
    data.append('title', title);
    data.append('image_file', file);

    var url = this.getCanvasUploadUrl();

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        var xhr = event.target;
        if (goog.string.startsWith(String(xhr.status), '2')) {
            this.databroker.processResponse(event.target.response, url, xhr, opt_successHandler || jQuery.noop);
        }
        else {
            if (goog.isFunction(opt_errorHandler)) {
                opt_errorHandler(event);
            }
        }
    }.bind(this));
    if (goog.isFunction(opt_progressHandler)) {
        xhr.addEventListener('progress', opt_progressHandler);
    }
    if (goog.isFunction(opt_errorHandler)) {
        xhr.addEventListener('error', opt_errorHandler);
        xhr.addEventListener('abort', opt_errorHandler);
    }

    xhr.open('POST', url);

    if (goog.isFunction(this.databroker.syncService.getCsrfToken)) {
        xhr.setRequestHeader('X-CSRFToken', this.databroker.syncService.getCsrfToken());
    }

    xhr.send(data);
    return xhr;
};
