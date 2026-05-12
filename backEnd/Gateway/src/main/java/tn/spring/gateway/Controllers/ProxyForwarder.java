package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
public class ProxyForwarder {

    private final RestTemplate restTemplate;

    public ProxyForwarder(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ResponseEntity<String> forward(String url,
                                          HttpMethod method,
                                          Object body,
                                          HttpServletRequest req) {

        HttpHeaders headers = new HttpHeaders();

        String auth = req.getHeader(HttpHeaders.AUTHORIZATION);
        if (auth != null) headers.set(HttpHeaders.AUTHORIZATION, auth);

        String cookie = req.getHeader(HttpHeaders.COOKIE);
        if (cookie != null) headers.set(HttpHeaders.COOKIE, cookie);

        String accept = req.getHeader(HttpHeaders.ACCEPT);
        if (accept != null) headers.set(HttpHeaders.ACCEPT, accept);

        String contentType = req.getHeader(HttpHeaders.CONTENT_TYPE);
        if (contentType != null) headers.set(HttpHeaders.CONTENT_TYPE, contentType);

        if (body != null && headers.getContentType() == null) {
            headers.setContentType(MediaType.APPLICATION_JSON);
        }

        HttpEntity<Object> entity = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<String> response =
                    restTemplate.exchange(url, method, entity, String.class);

            return new ResponseEntity<>(
                    response.getBody(),
                    responseHeaders(response.getHeaders()),
                    response.getStatusCode()
            );
        } catch (RestClientResponseException ex) {
            return new ResponseEntity<>(
                    ex.getResponseBodyAsString(),
                    responseHeaders(ex.getResponseHeaders()),
                    ex.getStatusCode()
            );
        } catch (RestClientException ex) {
            return ResponseEntity
                    .status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body("{\"error\":\"UPSTREAM_SERVICE_UNAVAILABLE\"}");
        }
    }

    private HttpHeaders responseHeaders(HttpHeaders sourceHeaders) {
        HttpHeaders out = new HttpHeaders();
        if (sourceHeaders == null) {
            return out;
        }

        MediaType contentType = sourceHeaders.getContentType();
        if (contentType != null) {
            out.setContentType(contentType);
        }

        List<String> cookies = sourceHeaders.get(HttpHeaders.SET_COOKIE);
        if (cookies != null) {
            out.put(HttpHeaders.SET_COOKIE, cookies);
        }

        return out;
    }
}
