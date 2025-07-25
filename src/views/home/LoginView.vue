<template>
  <form @submit.prevent="submitForm">
    <!-- <div style="display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background-color: antiquewhite;">
      <div style="width: 50%; height: 75%; background-color: blueviolet;"> -->
    <div class="my-container-fluid">
      <div class="my-row">
        <!-- Left Column -->
        <div class="my-col-6">
          <!-- Username Field -->
          <div class="my-row">
            <div class="my-col-3">
              <label class="my-form-label" for="name">Name:</label>
            </div>
            <div class="my-col-9">
              <input class="my-form-control" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
                @input="validateField('name')" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.name">{{ errors.name }}</div>
            </div>
          </div>
          <!-- Email Field -->
          <div class="my-row">
            <div class="my-col-3">
              <label style="font-weight: bold;" for="email">Email:</label>
            </div>
            <div class="my-col-9">
              <input v-model="formData.email" id="email" type="text" @blur="validateField('email')"
                @input="validateField('email')" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.email">{{ errors.email }}</div>
            </div>
          </div>
          <!-- Password Field -->
          <div class="my-row">
            <div class="my-col-3">
              <label style="font-weight: bold;" for="password">Password:</label>
            </div>
            <div class="my-col-9">
              <input v-model="formData.password" id="password" type="text" @blur="validateField('password')"
                @input="validateField('password')" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.password">{{ errors.password }}</div>
            </div>
          </div>
          <!-- Role Selection -->
          <div class="my-row">
            <div class="my-col-3">
              <label style="font-weight: bold;" for="role">Role:</label>
            </div>
            <div class="my-col-9">
              <select v-model="formData.role" id="role" v-on:blur="validateField('role')"
                v-on:change="validateField('role')" :class="{ 'text-danger': errors.role }">
                <option value="" disabled>Select a role</option>
                <option v-for="item in items" :key="item.value" :value="item.value">
                  {{ item.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.role" class="text-danger">{{ errors.role }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="my-col-6">
          <!-- Username Field -->
          <div class="my-row">
            <div class="my-col-3">
              <label style="font-weight: bold;" for="username">Username:</label>
            </div>
            <div class="my-col-9">
              <input v-model="formData.username" id="username" type="text" @blur="validateField('username')"
                @input="validateField('username')" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.username">{{ errors.username }}</div>
            </div>
          </div>
          <!-- Phone Field -->
          <div class="my-row">
            <div class="my-col-3">
              <label style="font-weight: bold;" for="phone">Phone:</label>
            </div>
            <div class="my-col-9">
              <input v-model="formData.phone" id="phone" type="text" @blur="validateField('phone')"
                @input="validateField('phone')" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.phone">{{ errors.phone }}</div>
            </div>
          </div>
          <!-- Confirm Password Field -->
          <div class="my-row">
            <div class="my-col-3">
              <label style="font-weight: bold;" for="confirm_password">Confirm Password:</label>
            </div>
            <div class="my-col-9">
              <input v-model="formData.confirm_password" id="confirm_password" type="text"
                @blur="validateField('confirm_password')" @input="validateField('confirm_password')" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.confirm_password">{{ errors.confirm_password }}</div>
            </div>
          </div>
          <!-- Agreement Checkbox -->
          <div class="my-row">
            <div class="my-col-3">
              <label for="agree">Do you agree to our terms?</label>
            </div>
            <div class="my-col-9">
              <input v-model="formData.agree" id="agree" type="checkbox" v-on:change="validateField('agree')"
                :class="{ 'text-danger': errors.agree }" />
            </div>
          </div>
          <div class="my-row">
            <div class="my-col-3"></div>
            <div class="my-col-9">
              <div v-if="errors.agree" class="text-danger">{{ errors.agree }}</div>
            </div>
          </div>
        </div>


      </div>
      <!-- Buttons -->
      <div class="my-row">
        <div class="my-col-12" style="display: flex; align-items: center; justify-content: center; gap: 10px;">
          <button type="submit">
            Submit
          </button>
          <button type="button" v-on:click="clear">
            Clear
          </button>
        </div>
      </div>
    </div>
    <!-- </div>
    </div> -->
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface UserInfo {
  name: string;
  username: string;
  email: string;
  phone: number | null;
  password: string;
  confirm_password: string;
  role: string | null;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  username?: string;
  email?: string;
  phone?: number;
  password?: string;
  confirm_password?: string;
  role?: string;
  agree?: string;
}

const formData = ref<UserInfo>({
  name: '',
  username: '',
  email: '',
  phone: null,
  password: '',
  confirm_password: '',
  role: null,
  agree: false
});

const errors = ref<FormErrors>({});
const items = ref([
  { text: 'Admin', value: 'admin' },
  { text: 'User', value: 'user' },
  { text: 'Guest', value: 'guest' }
]);

function validateField(field: keyof UserInfo) {
  switch (field) {
    case 'name':
      if (!formData.value.name.trim()) {
        errors.value.name = 'Name is required';
      } else if (formData.value.name.length < 2) {
        errors.value.name = 'Name must be at least 2 characters';
      } else {
        delete errors.value.name;
      }
      break;

    case 'username':
      if (!formData.value.username.trim()) {
        errors.value.username = 'Username is required';
      } else if (formData.value.username.length < 4) {
        errors.value.username = 'Username must be at least 4 characters';
      } else if (!/^[a-zA-Z0-9_]+$/.test(formData.value.username)) {
        errors.value.username = 'Username can only contain letters, numbers, and underscores';
      } else {
        delete errors.value.username;
      }
      break;

    case 'email':
      if (!formData.value.email.trim()) {
        errors.value.email = 'Email is required';
      } else if (!/^\S+v-on:\S+\.\S+$/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
      } else {
        delete errors.value.email;
      }
      break;

    case 'password':
      validatePassword();
      break;

    case 'confirm_password':
      validatePassword();
      break;

    case 'role':
      if (!formData.value.role) {
        errors.value.role = 'Please select a role';
      } else {
        delete errors.value.role;
      }
      break;

    case 'agree':
      if (!formData.value.agree) {
        errors.value.agree = 'You must agree to continue';
      } else {
        delete errors.value.agree;
      }
      break;
  }
}

function validatePassword() {
  // Password validation
  if (!formData.value.password) {
    errors.value.password = 'Password is required';
  } else if (formData.value.password.length < 8) {
    errors.value.password = 'Password must be at least 8 characters';
  } else if (!/[A-Z]/.test(formData.value.password)) {
    errors.value.password = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(formData.value.password)) {
    errors.value.password = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(formData.value.password)) {
    errors.value.password = 'Password must contain at least one number';
  } else if (!/[^A-Za-z0-9]/.test(formData.value.password)) {
    errors.value.password = 'Password must contain at least one special character';
  } else {
    delete errors.value.password;
  }

  // Confirm password validation
  if (!formData.value.confirm_password) {
    errors.value.confirm_password = 'Please confirm your password';
  } else if (formData.value.password !== formData.value.confirm_password) {
    errors.value.confirm_password = 'Passwords do not match';
  } else {
    delete errors.value.confirm_password;
  }
}

function validatePasswordFields() {
  validateField('password');
  validateField('confirm_password');
}

function validateForm(): boolean {
  validateField('name');
  validateField('username');
  validateField('email');
  validateField('password');
  validateField('confirm_password');
  validateField('role');
  validateField('agree');

  return Object.keys(errors.value).length === 0;
}

function submitForm() {
  if (validateForm()) {
    // Form is valid, proceed with submission
    console.log('Form submitted:', formData.value);
    // Here you would typically send data to an API
    alert('Form submitted successfully!');
  } else {
    console.log('Form has errors', errors.value);
  }
}

function clear() {
  formData.value = {
    name: '',
    username: '',
    email: '',
    phone: null,
    password: '',
    confirm_password: '',
    role: null,
    agree: false
  };
  errors.value = {};
}
</script>
