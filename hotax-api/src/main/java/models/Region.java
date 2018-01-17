package models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Region {

	@JsonProperty("SubClass")
	private String campo;

	public String getCampo() {
		return campo;
	}

	public void setCampo(String campo) {
		this.campo = campo;
	}
	

	
	
		
	
	
}
