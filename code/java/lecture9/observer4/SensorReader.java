package sample9.observer4;

import java.util.Base64;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.net.URL;
import javax.net.ssl.HttpsURLConnection;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class SensorReader {
    private static final String API_STRING = "https://2019-eduiot.iniad.org/api/v1/sensors/%s";
    private String user;
    private String passwd;
    private float illuminance;
    private float humidity;
    private float airpressure;
    private float temperature;
    
    public SensorReader(String user, String passwd) {
        this.user = user;
        this.passwd = passwd;
    }

    public void execute(String room) throws InterruptedException, IOException {
        for(;;) {
            getSensor(room);
            System.out.printf("%f %f %f %f\n", illuminance, humidity, airpressure, temperature);
            
            Thread.sleep(30000);
        }
    }

    public float getIlluminance() {
        return illuminance;
    }

    public float getHumidity() {
        return humidity;
    }

    public float getAirpressure() {
        return airpressure;
    }

    public float getTemperature() {
        return temperature;
    }

    private void getSensor(String room) throws IOException {
        URL url = new URL(String.format(API_STRING, room));
        HttpsURLConnection con = (HttpsURLConnection)url.openConnection();
        String userPasswd = String.format("%s:%s", user, passwd);
        String encodedUserPasswd = Base64.getEncoder().encodeToString(userPasswd.getBytes());
        con.setRequestProperty("Authorization", "Basic " + encodedUserPasswd);
        BufferedReader reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String result = reader.readLine();

        JsonArray json = (JsonArray) new Gson().fromJson(result, JsonArray.class);
        for (int i = 0; i < json.size(); i++) {
            JsonObject obj = json.get(i).getAsJsonObject();
            if("illuminance".equals(obj.get("sensor_type").getAsString())) {
                illuminance = obj.get("value").getAsFloat();
            }
            if("humidity".equals(obj.get("sensor_type").getAsString())) {
                humidity = obj.get("value").getAsFloat();
            }
            if("airpressure".equals(obj.get("sensor_type").getAsString())) {
                airpressure = obj.get("value").getAsFloat();
            }
            if("temperature".equals(obj.get("sensor_type").getAsString())) {
                temperature = obj.get("value").getAsFloat();
            }
        }

        reader.close();
        con.disconnect();;        
    }
}