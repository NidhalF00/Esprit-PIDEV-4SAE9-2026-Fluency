package tn.esprit.courses.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import tn.esprit.courses.Entity.Module;
import tn.esprit.courses.services.ModuleService;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class ModuleControllerTest {

    @InjectMocks
    ModuleController moduleController;

    @Mock
    private ModuleService moduleService;

    @Test
    void shouldReturnAllModules() {
        List<Module> modules = Arrays.asList(
                new Module(1L, "Java"),
                new Module(2L, "Spring")
        );

        Mockito.when(moduleService.getAll()).thenReturn(modules);
        ResponseEntity responseEntity =  moduleController.getAll();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(modules, responseEntity.getBody());
    }

    @Test
    void shouldReturnModuleById() throws Exception {
        Module module = new Module(1L, "Java");

        Mockito.when(moduleService.getById(1L)).thenReturn(module);
        ResponseEntity responseEntity =  moduleController.getById(1L);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(module, responseEntity.getBody());
    }

    @Test
    void shouldCreateModule() throws Exception {
        Module module = new Module(null, "Python");
        Module created = new Module(1L, "Python");

        Mockito.when(moduleService.create(Mockito.any(Module.class))).thenReturn(created);

        ResponseEntity responseEntity =  moduleController.create(module);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(created, responseEntity.getBody());
    }

    @Test
    void shouldUpdateModule() throws Exception {
        Module module = new Module(null, "Java");
        Module updated = new Module(1L, "Updated Java");

        Mockito.when(moduleService.update(Mockito.eq(1L), Mockito.any(Module.class)))
                .thenReturn(updated);

        ResponseEntity responseEntity =  moduleController.update(1L, module);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updated, responseEntity.getBody());
    }

    @Test
    void shouldDeleteModule() throws Exception {
        Mockito.doNothing().when(moduleService).delete(1L);
        ResponseEntity responseEntity =  moduleController.delete(1L);
        assertEquals(HttpStatus.NO_CONTENT, responseEntity.getStatusCode());
    }
}