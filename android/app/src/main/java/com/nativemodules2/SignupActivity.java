package com.nativemodules2;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class SignupActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_signup);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        EditText etSignupMobileNo = findViewById(R.id.etSignupMobileNo);
        EditText etSignupEmail = findViewById(R.id.etSignupEmail);
        EditText etSignupUsername = findViewById(R.id.etSignupUsername);
        EditText etSignupPassword = findViewById(R.id.etSignupPassword);
        Button btnSignup = findViewById(R.id.btnSignup);

        btnSignup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String mobileNo = etSignupMobileNo.getText().toString();
                String email = etSignupEmail.getText().toString();
                String username = etSignupUsername.getText().toString();
                String password = etSignupPassword.getText().toString();
                LoginSignupModule.sendSignupData(username, password, email, mobileNo);
                SignupActivity.this.finish();
            }
        });

    }
}