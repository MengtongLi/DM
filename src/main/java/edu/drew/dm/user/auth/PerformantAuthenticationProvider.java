package edu.drew.dm.user.auth;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.scribejava.core.builder.ServiceBuilder;
import com.github.scribejava.core.builder.api.DefaultApi20;
import com.github.scribejava.core.oauth.OAuth20Service;
import com.typesafe.config.Config;
import edu.drew.dm.user.User;

import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

public class PerformantAuthenticationProvider extends AuthenticationProvider {

    private final String baseUri;
    private final String description;

    private OAuth20Service service;

    public PerformantAuthenticationProvider(Config config, ObjectMapper objectMapper) {
        super(config, objectMapper);
        this.baseUri = config.hasPath("auth.oauth.independent.uri")
                ? config.getString("auth.oauth.independent.uri")
                : "";
        this.description = config.hasPath("auth.oauth.independent.description") ? config.getString("auth.oauth.independent.description") : "Performant Software";
    }

    @Override
    public String getKey() {
        return "independent";
    }

    @Override
    public String getDescription() {
        return this.description;
    }

    @Override
    public OAuth20Service oauthService(UriInfo ui) {
        if (service == null) {
            service = new ServiceBuilder()
                    .apiKey(config.getString("auth.oauth.independent.key"))
                    .apiSecret(config.getString("auth.oauth.independent.secret"))
                    .callback(oauthCallbackUri(ui))
                    .build(new DefaultApi20() {
                        @Override
                        public String getAccessTokenEndpoint() {
                            return UriBuilder.fromUri(baseUri).path("/oauth/token").build().toString();
                        }

                        @Override
                        protected String getAuthorizationBaseUrl() {
                            return UriBuilder.fromUri(baseUri).path("/oauth/authorize").build().toString();
                        }
                    });
        }
        return service;
    }

    @Override
    protected String profileUrl() {
        return UriBuilder.fromUri(this.baseUri).path("api/me.json").build().toString();
    }

    @Override
    protected User parseProfile(JsonNode profile) {
        final JsonNode user = profile.path("user");

        final String email = user.path("email").asText();
        return new User(
                User.uri(getKey(), email),
                Stream.of(
                        user.path("first_name").asText(),
                        user.path("last_name").asText()
                ).filter(s -> s != null && !s.isEmpty()).collect(Collectors.joining(" ")),
                email
        );
    }
}
