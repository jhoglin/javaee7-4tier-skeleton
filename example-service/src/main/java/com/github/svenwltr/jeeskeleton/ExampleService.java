package com.github.svenwltr.jeeskeleton;

import java.util.HashMap;
import java.util.Map;

import javax.ejb.LocalBean;
import javax.ejb.Singleton;

@Singleton
@LocalBean
public class ExampleService {

	// this should be stored in a database
	private final Map<Integer, String> data = new HashMap<>();
	private int pk = 1;

	public Map<Integer, String> findAll() {
		return data;

	}

	public int create(String text) {
		int id;
		do {
			id = pk++;
		} while (data.containsKey(text));

		data.put(id, text);
		return id;

	}

}
