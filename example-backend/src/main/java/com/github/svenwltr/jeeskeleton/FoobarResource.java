package com.github.svenwltr.jeeskeleton;

import java.util.Set;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@RequestScoped
@Path("foobar")
public class FoobarResource {

	@EJB
	ExampleService example;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public KeyList get() {
		KeyList response = new KeyList();
		response.setKeys(example.keys());
		return response;

	}

	public class KeyList {
		private Set<Integer> keys;

		public Set<Integer> getKeys() {
			return keys;
		}

		public void setKeys(Set<Integer> keys) {
			this.keys = keys;
		}
	}
}
