package com.github.svenwltr.jeeskeleton;

import javax.ejb.Remote;

@Remote
public interface AuthServiceRemote {

	public String remoteCall(String name);
	
}
