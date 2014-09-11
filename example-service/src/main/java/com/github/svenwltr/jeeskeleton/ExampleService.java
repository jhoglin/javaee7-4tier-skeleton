package com.github.svenwltr.jeeskeleton;

import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import javax.ejb.LocalBean;
import javax.ejb.Singleton;

import com.google.common.hash.HashFunction;
import com.google.common.hash.Hashing;

@Singleton
@LocalBean
public class ExampleService {
	
	private final static HashFunction HF = Hashing.sha512();
	
	// this should be stored in a database
	private final Map<Integer, String> data = new HashMap<>();
	
	private int position = 0;
	
	public String sayHello(String name) {
		return "Hello " + name + "!";
	}

	public int doMagic(String name) {
		int id = position++;
		String hash = HF.hashString(name, Charset.forName("UTF_8")).toString();
		data.put(id, hash);
		
		return id;
		
	}
	
	public String getStuff(int id) {
		if(data.containsKey(id))
			return data.get(id);
		else
			return null;
		
	}

}
