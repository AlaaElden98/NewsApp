package com.newsapp;

import com.facebook.react.ReactActivity;
// react-native-screens package requires this step to properly work on Android devices
import android.os.Bundle;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "NewsApp";
  }

  // react-native-screens package requires this step to properly work on Android devices
  @Override
   protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}
