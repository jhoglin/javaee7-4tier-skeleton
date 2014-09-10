package com.github.svenwltr.jeeskeleton;

import javax.ejb.Local;

@Local
public interface AuthServiceLocal {
	
	public String localCall(String name);

}
