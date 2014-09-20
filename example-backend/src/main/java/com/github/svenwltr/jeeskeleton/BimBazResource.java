package com.github.svenwltr.jeeskeleton;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@RequestScoped
@Path("bimbaz")
public class BimBazResource {

	@EJB
	ExampleService example;

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getAll() {
		return example.sayHello("Bimbaz");

	}

}
