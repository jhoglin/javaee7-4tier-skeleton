package com.github.svenwltr.jeeskeleton;

import javax.ejb.EJB;
import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Singleton
@Path("bimbaz")
public class BimBazResource {
	
	@EJB AuthService auth;
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getAll() {
		return auth.localCall("Bimbaz");
		
	}

}
