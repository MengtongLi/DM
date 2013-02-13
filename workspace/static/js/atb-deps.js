// This file was autogenerated by closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../atb/Annotation.js', ['atb.Annotation'], []);
goog.addDependency('../../../atb/AnnotationBody.js', ['atb.AnnotationBody'], []);
goog.addDependency('../../../atb/AnnotationTarget.js', ['atb.AnnotationTarget'], []);
goog.addDependency('../../../atb/ClientApp.js', ['atb.ClientApp'], ['atb.DataStore', 'atb.WebService', 'atb.events.LinkingModeEntered', 'atb.events.LinkingModeExited', 'atb.resource.ResourceCrawler', 'atb.ui.Bezel', 'atb.ui.ViewerThumbnailTimeline', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.viewer.PanelManager', 'goog.events', 'goog.events.EventTarget', 'goog.fx.dom.FadeIn', 'goog.fx.dom.FadeOut', 'goog.ui.CustomButton', 'goog.ui.KeyboardShortcutHandler', 'goog.ui.Popup', 'jquery.animate_enhanced', 'jquery.jQuery', 'sc.data.Databroker']);
goog.addDependency('../../../atb/DMLiveWebService.js', ['atb.DMLiveWebService'], ['atb.WebService']);
goog.addDependency('../../../atb/DMWebService.js', ['atb.DMWebService'], ['atb.WebService']);
goog.addDependency('../../../atb/DataStore.js', ['atb.DataStore'], ['atb.WebService', 'atb.datastore.AsyncTaskInternal', 'atb.datastore.ContentTypes', 'atb.datastore.DataObject', 'atb.datastore.ResourceReference', 'atb.datastore.Storage', 'atb.debug.DebugFilter', 'atb.debug.DebugTools', 'atb.util.LangUtil', 'atb.util.Map', 'atb.util.ReferenceUtil', 'atb.util.Stack']);
goog.addDependency('../../../atb/Includes.js', ['atb.Includes'], ['atb.ClientApp', 'atb.DataStore', 'atb.PassThroughLoginWebService', 'atb.WebService', 'atb.ui.Preferences', 'atb.ui.WindowScaler', 'atb.ui.search.AutoComplete', 'atb.viewer.CanvasViewer', 'atb.viewer.Editor', 'atb.viewer.Finder', 'atb.viewer.PanelContainer', 'atb.viewer.PanelManager', 'atb.viewer.StandardSimpleMarkerEditor', 'atb.widgets.MenuUtil', 'goog.dom', 'goog.events']);
goog.addDependency('../../../atb/PassThroughLoginWebService.js', ['atb.PassThroughLoginWebService'], ['atb.WebService', 'atb.resource.ResourceFactory', 'goog.Uri', 'goog.string']);
goog.addDependency('../../../atb/Util.js', ['atb.Util'], []);
goog.addDependency('../../../atb/WebService.js', ['atb.WebService'], ['atb.Util', 'atb.debug.DebugFilter', 'atb.marker.Line', 'atb.marker.Point', 'atb.marker.Polygon', 'atb.util.Stack', 'goog.math.Size', 'goog.net.CrossDomainRpc', 'goog.net.EventType', 'goog.ui.IdGenerator', 'jquery.jQuery']);
goog.addDependency('../../../atb/datastore/AsyncTaskInternal.js', ['atb.datastore.AsyncTaskInternal'], ['atb.debug.DebugFilter', 'atb.util.ReferenceUtil', 'atb.util.Set', 'atb.util.Stack']);
goog.addDependency('../../../atb/datastore/ContentTypes.js', ['atb.datastore.ContentTypes'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/datastore/DataObject.js', ['atb.datastore.DataObject'], ['atb.debug.DebugFilter', 'atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/datastore/ResourceReference.js', ['atb.datastore.ResourceReference'], ['atb.util.LangUtil', 'atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/datastore/Storage.js', ['atb.datastore.Storage'], ['atb.debug.DebugFilter', 'atb.util.LangUtil', 'atb.util.Map', 'atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/datastore/TaskDataReceivedEvent.js', ['atb.datastore.TaskDataReceivedEvent'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/debug/AbstractDebugPanel.js', ['atb.debug.AbstractDebugPanel'], ['atb.util.LangUtil', 'jquery.jQuery']);
goog.addDependency('../../../atb/debug/DebugConsole.js', ['atb.debug.DebugConsole'], ['atb.debug.AbstractDebugPanel', 'atb.util.ReferenceUtil', 'jquery.jQuery']);
goog.addDependency('../../../atb/debug/DebugFilter.js', ['atb.debug.DebugFilter'], ['atb.debug.DebugTools', 'atb.util.Set']);
goog.addDependency('../../../atb/debug/DebugTools.js', ['atb.debug.DebugTools'], ['atb.debug.DebugConsole', 'atb.debug.DebugUtil', 'atb.debug.DebugViewer', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil']);
goog.addDependency('../../../atb/debug/DebugUtil.js', ['atb.debug.DebugUtil'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/debug/DebugViewer.js', ['atb.debug.DebugViewer'], ['atb.debug.AbstractDebugPanel', 'atb.util.LangUtil', 'atb.util.ReferenceUtil', 'atb.util.Set', 'goog.events', 'goog.events.EventType', 'jquery.jQuery']);
goog.addDependency('../../../atb/events/Events.js', ['atb.events.Events'], ['goog.events.EventType']);
goog.addDependency('../../../atb/events/LinkingModeEntered.js', ['atb.events.LinkingModeEntered'], ['goog.events.Event']);
goog.addDependency('../../../atb/events/LinkingModeExited.js', ['atb.events.LinkingModeExited'], ['goog.events.Event']);
goog.addDependency('../../../atb/events/ResourceClicked.js', ['atb.events.ResourceClicked'], ['goog.events.Event']);
goog.addDependency('../../../atb/events/ResourceModified.js', ['atb.events.ResourceModified'], ['goog.events.Event']);
goog.addDependency('../../../atb/events/ViewerHasEnteredBackground.js', ['atb.events.ViewerHasEnteredBackground'], ['goog.events.Event']);
goog.addDependency('../../../atb/marker/Line.js', ['atb.marker.Line'], ['atb.marker.Multipoint', 'atb.marker.Point']);
goog.addDependency('../../../atb/marker/Marker.js', ['atb.marker.Marker'], []);
goog.addDependency('../../../atb/marker/Multipoint.js', ['atb.marker.Multipoint'], ['atb.marker.Marker', 'atb.marker.Point']);
goog.addDependency('../../../atb/marker/Point.js', ['atb.marker.Point'], ['atb.marker.Marker']);
goog.addDependency('../../../atb/marker/Polygon.js', ['atb.marker.Polygon'], ['atb.marker.Multipoint', 'atb.marker.Point']);
goog.addDependency('../../../atb/marker/RectangleHandler.js', ['atb.marker.Handler.Rectangle'], ['openlayers.OpenLayers']);
goog.addDependency('../../../atb/resource/AnnotationResource.js', ['atb.resource.AnnotationResource'], ['atb.resource.Resource', 'goog.structs.Map']);
goog.addDependency('../../../atb/resource/AnnotationSummary.js', ['atb.resource.AnnotationSummary'], ['atb.Util', 'atb.resource.ResourceCollection']);
goog.addDependency('../../../atb/resource/CanvasResource.js', ['atb.resource.CanvasResource'], ['atb.resource.Resource', 'goog.math.Size', 'goog.structs.Map']);
goog.addDependency('../../../atb/resource/CanvasSummary.js', ['atb.resource.CanvasSummary'], ['atb.resource.ResourceSummary', 'atb.util.ReferenceUtil', 'goog.math.Size']);
goog.addDependency('../../../atb/resource/Image.js', ['atb.resource.Image'], []);
goog.addDependency('../../../atb/resource/ManuscriptResource.js', ['atb.resource.ManuscriptResource'], ['atb.resource.Resource']);
goog.addDependency('../../../atb/resource/ManuscriptSummary.js', ['atb.resource.ManuscriptSummary', 'atb.resource.ManuscriptSummary.PageNumberSummary'], ['atb.resource.ResourceSummary', 'goog.structs.Map']);
goog.addDependency('../../../atb/resource/MarkerAnnotationSummary.js', ['atb.resource.MarkerAnnotationSummary'], ['atb.resource.AnnotationSummary']);
goog.addDependency('../../../atb/resource/MarkerCollection.js', ['atb.resource.MarkerCollection'], ['atb.resource.ResourceCollection', 'jquery.jQuery']);
goog.addDependency('../../../atb/resource/MarkerResource.js', ['atb.resource.MarkerResource', 'atb.resource.MarkerResource.shapes'], ['atb.resource.Resource']);
goog.addDependency('../../../atb/resource/MarkerSummary.js', ['atb.resource.MarkerSummary'], ['atb.resource.ResourceSummary', 'goog.math.Size']);
goog.addDependency('../../../atb/resource/MetaData.js', ['atb.resource.MetaData'], []);
goog.addDependency('../../../atb/resource/OAC.js', ['atb.resource.OAC', 'atb.resource.OAC.jAgent', 'atb.resource.OAC.jAnno', 'atb.resource.OAC.jConstraint', 'atb.resource.OAC.jResource'], ['atb.resource.OAC.rdfQuery', 'jquery.jQuery']);
goog.addDependency('../../../atb/resource/Resource.js', ['atb.resource.Resource'], []);
goog.addDependency('../../../atb/resource/ResourceCollection.js', ['atb.resource.ResourceCollection'], ['atb.resource.ResourceSummary', 'atb.widgets.TwirlDown', 'goog.dom']);
goog.addDependency('../../../atb/resource/ResourceCrawler.js', ['atb.resource.ResourceCrawler'], ['atb.Util', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../atb/resource/ResourceFactory.js', ['atb.resource.ResourceFactory'], ['atb.resource.AnnotationResource', 'atb.resource.CanvasResource', 'atb.resource.ManuscriptResource', 'atb.resource.MarkerResource', 'atb.resource.TextHighlightResource', 'atb.resource.TextResource', 'atb.resource.UserResource']);
goog.addDependency('../../../atb/resource/ResourceSummary.js', ['atb.resource.ResourceSummary', 'atb.resource.ResourceSummary.HANDLER_MSG'], ['goog.dom', 'goog.dom.DomHelper', 'goog.events', 'goog.object', 'jquery.jQuery']);
goog.addDependency('../../../atb/resource/ResourceSummaryFactory.js', ['atb.resource.ResourceSummaryFactory'], ['atb.resource.CanvasSummary', 'atb.resource.ManuscriptSummary', 'atb.resource.MarkerSummary', 'atb.resource.TextHighlightSummary', 'atb.resource.TextSummary']);
goog.addDependency('../../../atb/resource/TextHighlightResource.js', ['atb.resource.TextHighlightResource'], ['atb.resource.Resource']);
goog.addDependency('../../../atb/resource/TextHighlightSummary.js', ['atb.resource.TextHighlightSummary'], ['atb.resource.ResourceSummary']);
goog.addDependency('../../../atb/resource/TextResource.js', ['atb.resource.TextResource'], ['atb.resource.Resource']);
goog.addDependency('../../../atb/resource/TextSummary.js', ['atb.resource.TextSummary'], ['atb.resource.ResourceSummary']);
goog.addDependency('../../../atb/resource/UserResource.js', ['atb.resource.UserResource'], ['atb.resource.Resource', 'goog.array']);
goog.addDependency('../../../atb/resource/jquery.rdfquery.rdfa.min-1.0.js', ['atb.resource.OAC.rdfQuery'], []);
goog.addDependency('../../../atb/start.js', ['atb.start'], ['atb.DMWebService', 'atb.viewer.Editor', 'atb.viewer.PanelContainer', 'atb.viewer.PanelManager', 'atb.viewer.StandardSimpleMarkerEditor', 'atb.widgets.MenuUtil', 'goog.math.Size']);
goog.addDependency('../../../atb/temp/AnnotationRelation.js', ['atb.temp.AnnotationRelation'], []);
goog.addDependency('../../../atb/ui/AnnoTitlesList.js', ['atb.ui.AnnoTitlesList'], ['atb.resource.ResourceSummaryFactory', 'atb.viewer.ViewerFactory', 'goog.dom.DomHelper', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../atb/ui/Bezel.js', ['atb.ui.Bezel'], ['atb.util.StyleUtil', 'goog.dom', 'goog.math.Coordinate', 'goog.math.Size', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/Canvas.js', ['atb.ui.Canvas'], ['Raphael', 'goog.dom.DomHelper', 'goog.math.Coordinate', 'goog.math.Size', 'goog.structs.Map']);
goog.addDependency('../../../atb/ui/Container.js', ['atb.ui.Container'], ['goog.ui.Container']);
goog.addDependency('../../../atb/ui/InfoPane.js', ['atb.ui.InfoPane'], ['atb.widgets.DialogWidget', 'goog.dom.DomHelper', 'goog.events', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/PanelLayoutThumbnail.js', ['atb.ui.PanelLayoutThumbnail'], ['goog.dom.DomHelper']);
goog.addDependency('../../../atb/ui/PopupWindow.js', ['atb.ui.PopupWindow'], ['atb.Util', 'goog.dom', 'goog.dom.DomHelper', 'goog.events', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/Preferences.js', ['atb.ui.Preferences'], ['atb.Util', 'atb.widgets.DialogWidget', 'goog.dom.DomHelper', 'goog.ui.CustomButton', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/Toolbar.js', ['atb.ui.Toolbar', 'atb.ui.Toolbar.Orientation'], ['goog.dom', 'goog.ui.Toolbar', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/ViewerThumbnailTimeline.js', ['atb.ui.ViewerThumbnailTimeline'], ['atb.ui.PanelLayoutThumbnail', 'atb.viewer.ViewerThumbnail', 'goog.dom.DomHelper', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/WindowScaler.js', ['atb.ui.WindowScaler'], []);
goog.addDependency('../../../atb/ui/search/AutoComplete.js', ['atb.ui.search.AutoComplete'], ['atb.ui.search.RemoteArrayMatcher', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'goog.dom', 'goog.ui.ac.InputHandler', 'goog.ui.ac.Renderer']);
goog.addDependency('../../../atb/ui/search/RemoteArrayMatcher.js', ['atb.ui.search.RemoteArrayMatcher'], ['goog.string', 'goog.ui.ac.RemoteArrayMatcher', 'jquery.jQuery']);
goog.addDependency('../../../atb/ui/search/SearchAutoComplete.js', ['atb.ui.AutoComplete.Search'], ['atb.ui.search.AutoComplete', 'goog.events']);
goog.addDependency('../../../atb/util/DomTraverser.js', ['atb.util.DomTraverser'], ['atb.debug.DebugTools', 'atb.util.Map', 'atb.util.Set']);
goog.addDependency('../../../atb/util/HtmlUtil.js', ['atb.util.HtmlUtil'], ['atb.util.ReferenceUtil', 'goog.ui.IdGenerator']);
goog.addDependency('../../../atb/util/LangUtil.js', ['atb.util.LangUtil'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/util/Map.js', ['atb.util.Map'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/util/ObjectMap.js', ['atb.util.ObjectMap'], ['atb.util.Map']);
goog.addDependency('../../../atb/util/OrderedSet.js', ['atb.util.OrderedSet'], ['goog.array', 'goog.structs.Set']);
goog.addDependency('../../../atb/util/ReferenceUtil.js', ['atb.util.ReferenceUtil'], []);
goog.addDependency('../../../atb/util/Set.js', ['atb.util.Set'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/util/Stack.js', ['atb.util.Stack'], []);
goog.addDependency('../../../atb/util/StyleUtil.js', ['atb.util.StyleUtil'], ['atb.util.ReferenceUtil', 'goog.dom.DomHelper', 'goog.math.Coordinate', 'goog.positioning.ClientPosition', 'jquery.jQuery']);
goog.addDependency('../../../atb/viewer/CanvasThumbnail.js', ['atb.viewer.CanvasThumbnail'], ['atb.ui.Canvas', 'atb.viewer.ViewerThumbnail']);
goog.addDependency('../../../atb/viewer/CanvasViewer.js', ['atb.viewer.CanvasViewer'], ['atb.viewer.Viewer', 'sc.canvas.CanvasViewer', 'sc.canvas.FabricCanvasFactory']);
goog.addDependency('../../../atb/viewer/CollectionViewer.js', ['atb.viewer.CollectionViewer'], ['goog.dom.dataset', 'goog.ui.HoverCard']);
goog.addDependency('../../../atb/viewer/ColorOpacityField.js', ['atb.viewer.ColorOpacityField'], ['atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'goog.events', 'goog.events.EventType', 'goog.positioning.AnchoredViewportPosition', 'goog.positioning.ClientPosition', 'goog.positioning.Corner', 'goog.ui.Component.EventType', 'goog.ui.HsvaPalette', 'goog.ui.Popup']);
goog.addDependency('../../../atb/viewer/Editor.js', ['atb.viewer.Editor'], ['atb.ClientApp', 'atb.Util', 'atb.debug.DebugTools', 'atb.events.ResourceClicked', 'atb.events.ResourceModified', 'atb.util.HtmlUtil', 'atb.util.ReferenceUtil', 'atb.util.Set', 'atb.util.StyleUtil', 'atb.viewer.EditorPropertiesPane', 'atb.viewer.Finder', 'atb.viewer.TextEditorAnnotate', 'atb.viewer.TextThumbnail', 'atb.viewer.Viewer', 'atb.widgets.DialogWidget', 'atb.widgets.ForegroundMenuDisplayer', 'atb.widgets.GlassPane', 'atb.widgets.IMenu', 'atb.widgets.MenuItem', 'atb.widgets.MenuUtil', 'atb.widgets.Toolbar', 'goog.asserts', 'goog.cssom.iframe.style', 'goog.dom', 'goog.dom.DomHelper', 'goog.editor.Command', 'goog.editor.Field', 'goog.editor.plugins.BasicTextFormatter', 'goog.editor.plugins.EnterHandler', 'goog.editor.plugins.HeaderFormatter', 'goog.editor.plugins.LinkBubble', 'goog.editor.plugins.LinkDialogPlugin', 'goog.editor.plugins.ListTabHandler', 'goog.editor.plugins.LoremIpsum', 'goog.editor.plugins.RemoveFormatting', 'goog.editor.plugins.SpacesTabHandler', 'goog.editor.plugins.UndoRedo', 'goog.events.PasteHandler', 'goog.ui.IdGenerator', 'goog.ui.editor.DefaultToolbar', 'goog.ui.editor.ToolbarController', 'jquery.jQuery']);
goog.addDependency('../../../atb/viewer/EditorPropertiesPane.js', ['atb.viewer.EditorPropertiesPane'], ['goog.dom', 'goog.ui.ComboBox', 'goog.ui.ComboBoxItem', 'goog.ui.CustomButton']);
goog.addDependency('../../../atb/viewer/FakePanelContainer.js', ['atb.viewer.FakePanelContainer'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/viewer/Finder.js', ['atb.viewer.Finder', 'atb.viewer.Finder.ContextTypes'], ['atb.events.ResourceClicked', 'atb.resource.AnnotationSummary', 'atb.resource.MarkerAnnotationSummary', 'atb.resource.MarkerCollection', 'atb.resource.ResourceCollection', 'atb.resource.ResourceSummaryFactory', 'atb.ui.PopupWindow', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.viewer.ResourceListViewer', 'atb.widgets.DialogWidget', 'goog.array', 'goog.events.Event', 'goog.events.KeyCodes', 'goog.ui.ToolbarToggleButton']);
goog.addDependency('../../../atb/viewer/HorizontalLayoutManager.js', ['atb.viewer.HorizontalLayoutManager'], ['atb.viewer.LayoutManager', 'goog.style']);
goog.addDependency('../../../atb/viewer/ItemViewer.js', ['atb.viewer.ItemViewer'], ['goog.dom.dataset', 'goog.events.EventTarget', 'goog.math.Size']);
goog.addDependency('../../../atb/viewer/LayoutManager.js', ['atb.viewer.LayoutManager'], ['atb.viewer.ItemViewer', 'goog.dom.DomHelper', 'goog.math.Size', 'goog.style', 'goog.ui.IdGenerator']);
goog.addDependency('../../../atb/viewer/MarkerData.js', ['atb.viewer.MarkerData', 'atb.viewer.MarkerData.DEFAULT_STYLE'], ['atb.resource.MarkerResource', 'atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/viewer/MarkerEditor.js', ['atb.viewer.MarkerEditor'], ['atb.Util', 'atb.debug.DebugUtil', 'atb.ui.Bezel', 'atb.util.ReferenceUtil', 'atb.viewer.MarkerEditorAnnotationHack', 'atb.viewer.MarkerEditorData', 'atb.viewer.MarkerViewer', 'atb.viewer.UndoStack', 'jquery.jQuery', 'openlayers.OpenLayers']);
goog.addDependency('../../../atb/viewer/MarkerEditorAnnotationHack.js', ['atb.viewer.MarkerEditorAnnotationHack'], ['atb.temp.AnnotationRelation', 'atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/viewer/MarkerEditorData.js', ['atb.viewer.MarkerEditorData'], ['atb.util.ReferenceUtil', 'atb.viewer.MarkerData', 'goog.structs.Set']);
goog.addDependency('../../../atb/viewer/MarkerViewer.js', ['atb.viewer.MarkerViewer'], ['atb.debug.DebugUtil', 'atb.marker.Line', 'atb.marker.Point', 'atb.marker.Polygon', 'atb.viewer.ResourceViewer', 'jquery.jQuery', 'openlayers.OpenLayers']);
goog.addDependency('../../../atb/viewer/PanelContainer.js', ['atb.viewer.PanelContainer'], ['atb.ClientApp', 'atb.debug.DebugUtil', 'atb.events.ViewerHasEnteredBackground', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.viewer.ResourceListViewer', 'atb.viewer.UndoStack', 'atb.widgets.IMenu', 'atb.widgets.MenuItem', 'atb.widgets.MenuUtil', 'atb.widgets.Toolbar', 'atb.widgets.VerticalToolbar', 'goog.dom', 'goog.dom.DomHelper', 'goog.editor.Field', 'goog.events', 'jquery.jQuery']);
goog.addDependency('../../../atb/viewer/PanelManager.js', ['atb.viewer.PanelManager'], ['atb.util.OrderedSet', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'goog.array', 'goog.structs.Map']);
goog.addDependency('../../../atb/viewer/RepoBrowser.js', ['atb.viewer.RepoBrowser'], ['atb.viewer.CanvasViewer', 'atb.viewer.Viewer', 'sc.RepoBrowser']);
goog.addDependency('../../../atb/viewer/ResourceListViewer.js', ['atb.viewer.ResourceListViewer'], ['atb.ClientApp', 'atb.WebService', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.viewer.Viewer', 'goog.array', 'goog.dom', 'goog.events', 'goog.ui.ToolbarButton', 'jquery.jQuery']);
goog.addDependency('../../../atb/viewer/ResourceViewer.js', ['atb.viewer.ResourceViewer'], ['atb.ClientApp', 'atb.DMWebService', 'atb.resource.Image', 'atb.util.ReferenceUtil', 'atb.viewer.CanvasThumbnail', 'goog.math.Size', 'jquery.jQuery', 'openlayers.OpenLayers']);
goog.addDependency('../../../atb/viewer/SimpleMarkerEditor.js', ['atb.viewer.SimpleMarkerEditor'], ['atb.debug.DebugUtil', 'atb.util.ReferenceUtil', 'atb.viewer.MarkerEditor', 'atb.widgets.IMenu', 'atb.widgets.MenuActionEvent', 'atb.widgets.MenuItem', 'atb.widgets.MenuUtil', 'atb.widgets.Toolbar', 'atb.widgets.VerticalToolbar']);
goog.addDependency('../../../atb/viewer/StandardSimpleMarkerEditor.js', ['atb.viewer.StandardSimpleMarkerEditor'], ['atb.debug.DebugUtil', 'atb.events.ResourceClicked', 'atb.marker.Handler.Rectangle', 'atb.ui.InfoPane', 'atb.util.ReferenceUtil', 'atb.viewer.ColorOpacityField', 'atb.viewer.Finder', 'atb.viewer.SimpleMarkerEditor', 'atb.widgets.DialogWidget', 'atb.widgets.ForegroundMenuDisplayer', 'atb.widgets.GlassPane', 'goog.dom', 'goog.events', 'goog.structs.Set', 'jquery.jQuery']);
goog.addDependency('../../../atb/viewer/TextEditorAnnotate.js', ['atb.viewer.TextEditorAnnotate'], ['atb.events.ResourceClicked', 'atb.resource.ResourceFactory', 'atb.resource.TextHighlightResource', 'atb.ui.Bezel', 'atb.util.DomTraverser', 'atb.viewer.ResourceListViewer', 'atb.widgets.ForegroundMenuDisplayer', 'goog.dom', 'goog.dom.TagName', 'goog.editor.Plugin']);
goog.addDependency('../../../atb/viewer/TextThumbnail.js', ['atb.viewer.TextThumbnail'], ['atb.viewer.ViewerThumbnail']);
goog.addDependency('../../../atb/viewer/TiledLayoutManager.js', ['atb.viewer.TiledLayoutManager'], ['atb.viewer.LayoutManager', 'goog.style']);
goog.addDependency('../../../atb/viewer/UndoStack.js', ['atb.viewer.UndoStack'], []);
goog.addDependency('../../../atb/viewer/VerticalLayoutManager.js', ['atb.viewer.VerticalLayoutManager'], ['atb.viewer.LayoutManager', 'goog.style']);
goog.addDependency('../../../atb/viewer/Viewer.js', ['atb.viewer.Viewer'], ['atb.Util', 'atb.ui.AnnoTitlesList', 'atb.util.StyleUtil', 'atb.widgets.Toolbar', 'goog.events', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.events.KeyCodes', 'goog.math.Coordinate', 'goog.ui.Popup', 'jquery.jQuery']);
goog.addDependency('../../../atb/viewer/ViewerFactory.js', ['atb.viewer.ViewerFactory'], []);
goog.addDependency('../../../atb/viewer/ViewerThumbnail.js', ['atb.viewer.ViewerThumbnail'], ['jquery.jQuery']);
goog.addDependency('../../../atb/widgets/BreadCrumbs.js', ['atb.widgets.BreadCrumbs'], ['goog.array', 'goog.dom.DomHelper', 'goog.structs.Map', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/CursorFollower.js', ['atb.widgets.CursorFollower'], ['goog.dom', 'goog.events', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/DialogWidget.js', ['atb.widgets.DialogWidget'], ['atb.debug.DebugTools', 'atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.widgets.MenuButtonSet', 'atb.widgets.MenuUtil', 'goog.dom', 'goog.ui.Dialog', 'goog.ui.Dialog.ButtonSet', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/EditablePropertyList.js', ['atb.widgets.EditablePropertyList'], []);
goog.addDependency('../../../atb/widgets/ExclusiveGrouping.js', ['atb.widgets.ExclusiveGrouping'], ['atb.debug.DebugUtil', 'atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/widgets/Filter.js', ['atb.widgets.Filter', 'atb.widgets.Filter.FILTERPARAMS'], ['goog.dom', 'goog.events', 'goog.ui.DatePicker', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/ForegroundMenuDisplayer.js', ['atb.widgets.ForegroundMenuDisplayer'], ['atb.widgets.GlassPane', 'goog.events.EventType', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/GlassPane.js', ['atb.widgets.GlassPane'], ['atb.util.LangUtil', 'atb.util.ReferenceUtil', 'goog.events', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/IMenu.js', ['atb.widgets.IMenu'], ['atb.widgets.MenuActionEvent']);
goog.addDependency('../../../atb/widgets/MenuActionEvent.js', ['atb.widgets.MenuActionEvent'], []);
goog.addDependency('../../../atb/widgets/MenuButtonSet.js', ['atb.widgets.MenuButtonSet'], ['atb.debug.DebugUtil', 'atb.util.ReferenceUtil', 'atb.widgets.MenuActionEvent', 'atb.widgets.MenuUtil', 'goog.dom', 'goog.ui.Dialog.ButtonSet', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/MenuItem.js', ['atb.widgets.MenuItem'], ['atb.util.ReferenceUtil']);
goog.addDependency('../../../atb/widgets/MenuUtil.js', ['atb.widgets.MenuUtil'], ['atb.debug.DebugUtil', 'atb.util.LangUtil', 'atb.util.ReferenceUtil', 'atb.widgets.MenuItem', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/PanelChooser.js', ['atb.widgets.PanelChooser'], ['goog.dom.DomHelper', 'goog.events', 'goog.math.Size', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/PropertyEditorPane.js', ['atb.widgets.PropertyEditorPane'], []);
goog.addDependency('../../../atb/widgets/RadialMenu.js', ['atb.widgets.RadialMenu'], ['atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.widgets.ExclusiveGrouping', 'atb.widgets.IMenu', 'jquery.jQuery', 'jquery.plugins.radmenu']);
goog.addDependency('../../../atb/widgets/RepoBrowser.js', ['atb.widgets.RepoBrowser'], ['atb.viewer.CanvasViewer', 'goog.dom', 'goog.dom.DomHelper', 'sc.RepoBrowser']);
goog.addDependency('../../../atb/widgets/StringPropertyEditor.js', ['atb.widgets.StringPropertyEditor'], []);
goog.addDependency('../../../atb/widgets/TemplateGenerator.js', ['atb.widgets.TemplateGenerator'], ['atb.util.LangUtil', 'atb.util.Map', 'atb.util.ObjectMap', 'atb.util.ReferenceUtil', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/Toolbar.js', ['atb.widgets.Toolbar'], ['atb.util.Map', 'atb.util.ReferenceUtil', 'atb.widgets.IMenu', 'goog.events', 'goog.ui.Component.EventType', 'goog.ui.editor.DefaultToolbar', 'goog.ui.editor.ToolbarFactory']);
goog.addDependency('../../../atb/widgets/TwirlDown.js', ['atb.widgets.TwirlDown'], ['goog.ui.AnimatedZippy', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/VerticalToolbar.js', ['atb.widgets.VerticalToolbar'], ['atb.util.ReferenceUtil', 'atb.util.StyleUtil', 'atb.widgets.IMenu', 'goog.dom', 'goog.events', 'goog.ui.Component.EventType', 'goog.ui.Container', 'goog.ui.editor.DefaultToolbar', 'goog.ui.editor.ToolbarFactory']);
goog.addDependency('../../../atb/widgets/WorkingResources.js', ['atb.widgets.WorkingResources'], ['atb.util.StyleUtil', 'atb.widgets.PanelChooser', 'atb.widgets.WorkingResourcesFolio', 'atb.widgets.WorkingResourcesItem', 'atb.widgets.WorkingResourcesManuscript', 'goog.dom.DomHelper', 'goog.events.Event', 'goog.events.EventTarget', 'goog.math.Coordinate', 'goog.math.Size', 'goog.positioning.ClientPosition', 'goog.structs.Map', 'goog.style', 'goog.ui.Popup', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/WorkingResourcesFolio.js', ['atb.widgets.WorkingResourcesFolio'], ['atb.widgets.WorkingResourcesItem', 'sc.RepoBrowserFolio']);
goog.addDependency('../../../atb/widgets/WorkingResourcesItem.js', ['atb.widgets.WorkingResourcesItem'], ['goog.dom.DomHelper', 'goog.events', 'goog.events.ActionEvent', 'goog.events.EventTarget', 'jquery.jQuery']);
goog.addDependency('../../../atb/widgets/WorkingResourcesManuscript.js', ['atb.widgets.WorkingResourcesManuscript'], ['atb.widgets.WorkingResourcesItem', 'goog.structs.Map', 'goog.ui.AnimatedZippy']);
goog.addDependency('../../../fabric/fabric0.9.15.min.js', ['fabric'], []);
goog.addDependency('../../../jquery/jquery-1.8.3.js', ['jquery.jQuery'], []);
goog.addDependency('../../../jquery/jquery-ui-1.8.22.custom.min.js', ['jquery.jQueryUI'], []);
goog.addDependency('../../../jquery/jquery.animate-enhanced.js', ['jquery.animate_enhanced'], []);
goog.addDependency('../../../jquery/jquery.event.drag-2.2.js', ['jquery.event.drag'], []);
goog.addDependency('../../../jquery/jquery.hoverIntent.minified.js', ['jquery.hoverIntent'], []);
goog.addDependency('../../../jquery/jquery.mousewheel.js', ['jquery.mousewheel'], []);
goog.addDependency('../../../jquery/jquery.rdfquery.core-1.0.js', ['jquery.rdfquery'], ['jquery.jQuery']);
goog.addDependency('../../../jquery/plugins/jQuery.popout.js', ['jquery.popout'], ['jquery.hoverIntent']);
goog.addDependency('../../../jquery/plugins/jQuery.radmenu.js', ['jquery.plugins.radmenu'], []);
goog.addDependency('../../../openlayers/OpenLayers.js', ['openlayers.OpenLayers'], []);
goog.addDependency('../../../raphael/raphael-min.js', ['Raphael'], []);
goog.addDependency('../../../raphael/raphael.export.js', ['Raphael.export'], []);
goog.addDependency('../../../sc/BreadCrumbs.js', ['sc.BreadCrumbs'], ['jquery.jQuery']);
goog.addDependency('../../../sc/CommentViewer.js', ['sc.CommentViewer'], ['goog.dom.DomHelper', 'goog.events.EventTarget', 'goog.structs.Map', 'goog.ui.AnimatedZippy']);
goog.addDependency('../../../sc/RepoBrowser.js', ['sc.RepoBrowser'], ['goog.events.Event', 'goog.events.EventTarget', 'jquery.jQuery', 'jquery.popout', 'jquery.rdfquery', 'sc.Array', 'sc.BreadCrumbs', 'sc.RepoBrowserFolio', 'sc.RepoBrowserItem', 'sc.RepoBrowserManuscript', 'sc.data.Databroker']);
goog.addDependency('../../../sc/RepoBrowserFolio.js', ['sc.RepoBrowserFolio'], ['sc.RepoBrowserItem']);
goog.addDependency('../../../sc/RepoBrowserItem.js', ['sc.RepoBrowserItem'], ['jquery.jQuery']);
goog.addDependency('../../../sc/RepoBrowserManuscript.js', ['sc.RepoBrowserManuscript'], ['goog.dom', 'goog.math.Size', 'goog.ui.AnimatedZippy', 'sc.RepoBrowserItem']);
goog.addDependency('../../../sc/canvas/CanvasToolbar.js', ['sc.canvas.CanvasToolbar'], ['goog.dom', 'goog.events', 'goog.structs.Map', 'goog.ui.ToggleButton', 'goog.ui.Toolbar', 'goog.ui.editor.ToolbarFactory', 'jquery.jQuery', 'sc.canvas.DragFeatureControl', 'sc.canvas.DrawCircleControl', 'sc.canvas.DrawEllipseControl', 'sc.canvas.DrawLineControl', 'sc.canvas.DrawPolygonControl', 'sc.canvas.DrawRectControl', 'sc.canvas.ImageChoicePicker', 'sc.canvas.PanZoomGesturesControl']);
goog.addDependency('../../../sc/canvas/CanvasViewer.js', ['sc.canvas.CanvasViewer'], ['goog.dom', 'goog.events', 'goog.math.Size', 'jquery.jQuery', 'sc.canvas.CanvasToolbar', 'sc.canvas.DragFeatureControl', 'sc.canvas.FabricCanvas', 'sc.canvas.FabricCanvasFactory', 'sc.canvas.FabricCanvasViewport', 'sc.canvas.ZoomSliderControl']);
goog.addDependency('../../../sc/canvas/CommentedCanvasViewer.js', ['sc.canvas.CommentedCanvasViewer'], ['goog.events', 'sc.CommentViewer', 'sc.canvas.CanvasViewer']);
goog.addDependency('../../../sc/canvas/Control.js', ['sc.canvas.Control'], ['goog.events.Event', 'goog.events.EventTarget']);
goog.addDependency('../../../sc/canvas/DragFeatureControl.js', ['sc.canvas.DragFeatureControl'], ['Raphael', 'sc.canvas.FeatureControl']);
goog.addDependency('../../../sc/canvas/DrawCircleControl.js', ['sc.canvas.DrawCircleControl'], ['sc.canvas.DrawFeatureControl']);
goog.addDependency('../../../sc/canvas/DrawEllipseControl.js', ['sc.canvas.DrawEllipseControl'], ['sc.canvas.DrawFeatureControl']);
goog.addDependency('../../../sc/canvas/DrawFeatureControl.js', ['sc.canvas.DrawFeatureControl'], ['goog.events.Event', 'jquery.jQuery', 'sc.canvas.FeatureControl', 'sc.util.svg']);
goog.addDependency('../../../sc/canvas/DrawLineControl.js', ['sc.canvas.DrawLineControl'], ['goog.array', 'goog.events.KeyCodes', 'sc.canvas.DrawFeatureControl']);
goog.addDependency('../../../sc/canvas/DrawPolygonControl.js', ['sc.canvas.DrawPolygonControl'], ['sc.canvas.DrawLineControl']);
goog.addDependency('../../../sc/canvas/DrawRectControl.js', ['sc.canvas.DrawRectControl'], ['sc.canvas.DrawFeatureControl']);
goog.addDependency('../../../sc/canvas/FabricCanvas.js', ['sc.canvas.FabricCanvas'], ['fabric', 'goog.events.EventTarget', 'goog.math.Size', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../sc/canvas/FabricCanvasFactory.js', ['sc.canvas.FabricCanvasFactory'], ['sc.canvas.FabricCanvas']);
goog.addDependency('../../../sc/canvas/FabricCanvasViewport.js', ['sc.canvas.FabricCanvasViewport', 'sc.canvas.FabricCanvasViewportEvent'], ['fabric', 'goog.async.Throttle', 'goog.dom.DomHelper', 'goog.events.Event', 'goog.events.EventTarget', 'goog.object', 'goog.structs.Set', 'jquery.jQuery']);
goog.addDependency('../../../sc/canvas/FeatureControl.js', ['sc.canvas.FeatureControl'], ['sc.canvas.Control']);
goog.addDependency('../../../sc/canvas/ImageChoicePicker.js', ['sc.canvas.ImageChoicePicker'], ['goog.structs.Set', 'goog.ui.Button', 'goog.ui.CustomButton', 'jquery.jQuery']);
goog.addDependency('../../../sc/canvas/KeyboardShortcutsControl.js', ['sc.canvas.KeyboardShortcutsControl'], ['goog.events', 'sc.canvas.Control']);
goog.addDependency('../../../sc/canvas/PanZoomGesturesControl.js', ['sc.canvas.PanZoomGesturesControl'], ['goog.events', 'jquery.event.drag', 'jquery.jQuery', 'jquery.mousewheel', 'sc.canvas.Control']);
goog.addDependency('../../../sc/canvas/ZoomSliderControl.js', ['sc.canvas.ZoomSliderControl'], ['jquery.jQuery', 'jquery.jQueryUI', 'sc.canvas.Control']);
goog.addDependency('../../../sc/data/Databroker.js', ['sc.data.Databroker'], ['goog.Uri', 'goog.string', 'goog.structs.Map', 'goog.structs.Set', 'jquery.rdfquery', 'sc.data.Resource', 'sc.data.Triple', 'sc.data.TripleStore', 'sc.util.DefaultDict', 'sc.util.DeferredCollection', 'sc.util.Namespaces']);
goog.addDependency('../../../sc/data/Resource.js', ['sc.data.Resource'], ['goog.structs.Set', 'jquery.jQuery', 'sc.data.Triple', 'sc.util.Namespaces']);
goog.addDependency('../../../sc/data/Triple.js', ['sc.data.Triple'], []);
goog.addDependency('../../../sc/data/TripleStore.js', ['sc.data.TripleStore'], ['goog.array', 'goog.structs.Set', 'sc.util.DefaultDict', 'sc.util.Namespaces']);
goog.addDependency('../../../sc/util/Array.js', ['sc.Array'], []);
goog.addDependency('../../../sc/util/DefaultDict.js', ['sc.util.DefaultDict'], ['goog.structs.Map', 'goog.structs.Set', 'jquery.jQuery']);
goog.addDependency('../../../sc/util/DeferredCollection.js', ['sc.util.DeferredCollection'], []);
goog.addDependency('../../../sc/util/Namespaces.js', ['sc.util.Namespaces'], ['goog.structs.Map']);
goog.addDependency('../../../sc/util/Size.js', ['sc.util.Size'], []);
goog.addDependency('../../../sc/util/Svg.js', ['sc.util.svg'], ['sc.util.Namespaces']);
goog.addDependency('../../../sc/util/stats.js', ['sc.util.stats'], ['goog.array']);
