package com.github.svenwltr.jeeskeleton;

import java.util.List;
import java.util.stream.Collectors;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@RequestScoped
@Path("example")
public class ExampleResource {

	@EJB
	ExampleService example;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Item> getAll() {
		// playing with new streaming api
		return example.findAll().entrySet().stream()
				.map(e -> new Item(e.getKey(), e.getValue()))
				.collect(Collectors.toList());

	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Item add(String text) {
		return new Item(example.create(text), text);

	}

	@DELETE
	@Path("/{id}")
	public void delete(@PathParam("id") int id) {
		example.delete(id);

	}

	public static class Item {
		public int id;
		public String text;

		public Item(int id, String text) {
			this.id = id;
			this.text = text;
		}

	}

}
