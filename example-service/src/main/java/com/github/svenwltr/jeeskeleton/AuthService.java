package com.github.svenwltr.jeeskeleton;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;

/**
 * Session Bean implementation class AuthService
 */
@Stateless
@LocalBean
public class AuthService implements AuthServiceRemote, AuthServiceLocal {

	public String localCall(String name) {
		return "Hello local " + name + "!";
	}

	public String remoteCall(String name) {
		return "Hello remote " + name + "!";
	}

}
