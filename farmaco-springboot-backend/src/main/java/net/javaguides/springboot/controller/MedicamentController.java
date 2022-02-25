package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Medicament;
import net.javaguides.springboot.repository.MedicamentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MedicamentController {

	@Autowired
	private MedicamentRepository medicamentRepository;

	// get all medicaments
	@GetMapping("/medicaments")
	public List<Medicament> getAllMedicaments() {
		return medicamentRepository.findAll();
	}

	// create medicament rest api
	@PostMapping("/medicaments")
	public Medicament createMedicament(@RequestBody Medicament medicament) {
		return medicamentRepository.save(medicament);
	}

	// get medicament by id rest api
	@GetMapping("/medicaments/{id}")
	public ResponseEntity<Medicament> getMedicamentById(@PathVariable Long id) {
		Medicament medicament = medicamentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medicament not exist with id :" + id));
		return ResponseEntity.ok(medicament);
	}

	// update medicament rest api

	@PutMapping("/medicaments/{id}")
	public ResponseEntity<Medicament> updateMedicament(@PathVariable Long id,
			@RequestBody Medicament medicamentDetails) {
		Medicament medicament = medicamentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medicament not exist with id :" + id));

		medicament.setFirstName(medicamentDetails.getFirstName());
		medicament.setLastName(medicamentDetails.getLastName());
		medicament.setEmailId(medicamentDetails.getEmailId());
		medicament.setMedicamentName(medicamentDetails.getMedicamentName());

		Medicament updatedMedicament = medicamentRepository.save(medicament);
		return ResponseEntity.ok(updatedMedicament);
	}

	// delete medicament rest api
	@DeleteMapping("/medicaments/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMedicament(@PathVariable Long id) {
		Medicament medicament = medicamentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Medicament not exist with id :" + id));

		medicamentRepository.delete(medicament);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
