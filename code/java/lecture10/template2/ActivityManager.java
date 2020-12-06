

import java.util.ArrayList;
import java.io.IOException;

public class ActivityManager {
    private static ActivityManager instance = new ActivityManager();
    private ArrayList<Activity> activities = new ArrayList<Activity>();
    private int index = 0;
    
    private ActivityManager(){
    }

    public static ActivityManager getInstance() {
        return instance;
    }

    public void addActivity(Activity activity) {
        activities.add(activity);
    }
    
    public void execute() throws IOException {
        if(activities.size() == 0) {
            return;
        }

        for(;;) {
            Activity activity = activities.get(index);
            activity.execute();
            index = (index + 1) % activities.size();
        }
    }
}