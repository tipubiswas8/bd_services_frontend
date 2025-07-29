<template>

  <div class="my-container">
    <div class="my-row">
      <div class="my-bg-primary my-col-12 my-col-md-8 my-col-lg-4">Landing Page</div>

      <div class="my-col-12 my-col-md-8 my-col-lg-4">
        <div class="my-row">
          <div class="my-bg-info my-col-12 my-col-md-8 my-col-lg-4">AAA</div>
          <div class="my-bg-success my-col-12 my-col-md-4 my-col-lg-8">BBB</div>
        </div>
      </div>

      <div class="my-col-12">
        <div class="my-row">
          <div class="my-bg-danger my-col-12 my-col-md-8 my-col-lg-4">CCC</div>
          <div class="my-bg-warning my-col-12 my-col-md-4 my-col-lg-8">DDD</div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="my-text-center">Form-1</h1>
  <form @submit.prevent="submitForm">
    <!-- Extra small (xs) and small (sm) - single column and label and input on different line -->
    <!-- Medium (md) - single column and label and input on same line -->
    <!-- Large (lg) - 2 columns (left and right) and label and input on same line -->
    <!-- Extra large (xl) - 4 columns and label and input on same line -->
    <!-- Extra extra large (xxl) - 6 columns and label and input on different line -->
    <div class="my-container">
      <div class="my-row">
        <!-- Name Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <!-- Label - full width on xs/sm/xxl, 4 units on md/lg/xl -->
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="name">Name:</label>
            </div>
            <!-- Input - full width on xs/sm/xxl, 8 units on md/lg/xl -->
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <input class="my-form-control" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
                @input="validateField('name')" :class="{ 'my-text-danger': errors.name }" />
              <div v-if="errors.name" class="my-mb-1 my-text-danger">{{ errors.name }}</div>
            </div>
          </div>
        </div>

        <!-- Email Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="email">Email:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <input class="my-form-control" v-model="formData.email" id="email" type="text"
                @blur="validateField('email')" @input="validateField('email')"
                :class="{ 'my-text-danger': errors.email }" />
              <div v-if="errors.email" class="my-mb-1 my-text-danger">{{ errors.email }}</div>
            </div>
          </div>
        </div>

        <!-- Username Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="username">Username:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <input class="my-form-control" v-model="formData.username" id="username" type="text"
                @blur="validateField('username')" @input="validateField('username')"
                :class="{ 'my-text-danger': errors.username }" />
              <div v-if="errors.username" class="my-mb-1 my-text-danger">{{ errors.username }}</div>
            </div>
          </div>
        </div>

        <!-- Phone Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="phone">Phone:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <input class="my-form-control" v-model="formData.phone" id="phone" type="text"
                @blur="validateField('phone')" @input="validateField('phone')"
                :class="{ 'my-text-danger': errors.phone }" />
              <div v-if="errors.phone" class="my-mb-1 my-text-danger">{{ errors.phone }}</div>
            </div>
          </div>
        </div>

        <!-- Password Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="password">Password:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <input class="my-form-control" v-model="formData.password" id="password" type="text"
                @blur="validateField('password')" @input="validateField('password')"
                :class="{ 'my-text-danger': errors.password }" />
              <div v-if="errors.password" class="my-mb-1 my-text-danger">{{ errors.password }}</div>
            </div>
          </div>
        </div>

        <!-- Confirm Password Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="confirm_password">Confirm Password:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <input class="my-form-control" v-model="formData.confirm_password" id="confirm_password" type="text"
                @blur="validateField('confirm_password')" @input="validateField('confirm_password')"
                :class="{ 'my-text-danger': errors.confirm_password }" />
              <div v-if="errors.confirm_password" class="my-mb-1 my-text-danger">{{ errors.confirm_password }}</div>
            </div>
          </div>
        </div>

        <!-- Role Field -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="role">Role:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <select class="my-form-select" v-model="formData.role" id="role" v-on:blur="validateField('role')"
                v-on:change="validateField('role')">
                <option value="" disabled>Select a role</option>
                <option v-for="item in items" :key="item.value" :value="item.value">
                  {{ item.text }}
                </option>
              </select>
              <div v-if="errors.role" class="my-mb-1 my-text-danger">{{ errors.role }}</div>
            </div>
          </div>
        </div>

        <!-- Agreement Checkbox -->
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-4 my-col-xl-4 my-col-xxl-12">
              <label class="my-form-label my-required" for="agree">Agreement:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-8 my-col-xl-8 my-col-xxl-12">
              <div style="display: flex; align-items: center;">
                <input class="my-form-check-input" v-model="formData.agree" id="agree" type="checkbox"
                  v-on:change="validateField('agree')" :class="{ 'text-danger': errors.agree }" />
                <span style="margin-left: 8px;">Do you agree to our terms?</span>
              </div>
              <div v-if="errors.agree" class="my-mb-1 my-text-danger">{{ errors.agree }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="my-row my-pt-3">
      <div class="my-col-12" style="display: flex; align-items: center; justify-content: center; gap: 10px;">
        <button class="my-btn my-btn-primary" type="submit">
          Submit
        </button>
        <button class="my-btn my-btn-outline-secondary" type="button" v-on:click="clear">
          Clear
        </button>
      </div>
    </div>
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
  phone?: string;
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

    case 'phone':
      const phone = formData.value.phone;
      if (phone === null || isNaN(phone)) {
        errors.value.phone = 'Phone is required';
      } else if (String(phone).length < 5) {
        errors.value.phone = 'Phone must be at least 5 digits';
      } else {
        delete errors.value.phone;
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
  validateField('phone');
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
