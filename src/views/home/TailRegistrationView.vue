<template>
  <h1 class="ms-text-center">Form-1</h1>
  <form @submit.prevent="submitForm">
    <!-- Extra small (xs) and small (sm) - single column and label and input on different line -->
    <!-- Medium (md) - single column and label and input on same line -->
    <!-- Large (lg) - 2 columns (left and right) and label and input on same line -->
    <!-- Extra large (xl) - 4 columns and label and input on same line -->
    <!-- Extra extra large (xxl) - 6 columns and label and input on different line -->
    <div class="ms-grid ms-grid-cols-1 ms-lg:grid-cols-2 ms-xl:grid-cols-4 ms-2xl:grid-cols-6 ms-gap-4">
      <!-- Name -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0">
        <label class="ms-label ms-block" for="name">Name:</label>
        <input class="ms-input ms-w-full" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
          @input="validateField('name')" :class="{ 'ms-text-red-500': errors.name }" />
        <div v-if="errors.name" class="ms-text-red-500 ms-text-sm">{{ errors.name }}</div>
      </div>

      <!-- Email -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0">
        <label class="ms-label ms-block" for="email">Email:</label>
        <input class="ms-input ms-w-full" v-model="formData.email" id="email" type="text" @blur="validateField('email')"
          @input="validateField('email')" :class="{ 'ms-text-red-500': errors.email }" />
        <div v-if="errors.email" class="ms-text-red-500 ms-text-sm">{{ errors.email }}</div>
      </div>

      <!-- Username -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0">
        <label class="ms-label ms-block" for="username">Username:</label>
        <input class="ms-input ms-w-full" v-model="formData.username" id="username" type="text"
          @blur="validateField('username')" @input="validateField('username')"
          :class="{ 'ms-text-red-500': errors.username }" />
        <div v-if="errors.username" class="ms-text-red-500 ms-text-sm">{{ errors.username }}</div>
      </div>

      <!-- Phone -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0">
        <label class="ms-label ms-block" for="phone">Phone:</label>
        <input class="ms-input ms-w-full" v-model="formData.phone" id="phone" type="text" @blur="validateField('phone')"
          @input="validateField('phone')" :class="{ 'ms-text-red-500': errors.phone }" />
        <div v-if="errors.phone" class="ms-text-red-500 ms-text-sm">{{ errors.phone }}</div>
      </div>

      <!-- Password -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0">
        <label class="ms-label ms-block" for="password">Password:</label>
        <input class="ms-input ms-w-full" v-model="formData.password" id="password" type="text"
          @blur="validateField('password')" @input="validateField('password')"
          :class="{ 'ms-text-red-500': errors.password }" />
        <div v-if="errors.password" class="ms-text-red-500 ms-text-sm">{{ errors.password }}</div>
      </div>

      <!-- Confirm Password -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0">
        <label class="ms-label ms-block" for="confirm_password">Confirm Password:</label>
        <input class="ms-input ms-w-full" v-model="formData.confirm_password" id="confirm_password" type="text"
          @blur="validateField('confirm_password')" @input="validateField('confirm_password')"
          :class="{ 'ms-text-red-500': errors.confirm_password }" />
        <div v-if="errors.confirm_password" class="ms-text-red-500 ms-text-sm">{{ errors.confirm_password }}</div>
      </div>

      <!-- Role -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0 ms-col-span-1">
        <label class="ms-label ms-block" for="role">Role:</label>
        <select class="ms-select ms-w-full" v-model="formData.role" id="role" @blur="validateField('role')"
          @change="validateField('role')">
          <option value="" disabled>Select a role</option>
          <option v-for="item in items" :key="item.value" :value="item.value">{{ item.text }}</option>
        </select>
        <div v-if="errors.role" class="ms-text-red-500 ms-text-sm">{{ errors.role }}</div>
      </div>

      <!-- Agreement -->
      <div class="ms-space-y-1 ms-2xl:ms-space-y-0 ms-col-span-1">
        <label class="ms-label ms-block" for="agree">Agreement:</label>
        <div class="ms-flex ms-items-center">
          <input class="ms-checkbox" v-model="formData.agree" id="agree" type="checkbox"
            @change="validateField('agree')" :class="{ 'ms-text-red-500': errors.agree }" />
          <span class="ms-ml-2">Do you agree to our terms?</span>
        </div>
        <div v-if="errors.agree" class="ms-text-red-500 ms-text-sm">{{ errors.agree }}</div>
      </div>
    </div>
    <!-- Buttons -->
    <div class="ms-grid ms-grid-cols-1 ms-pt-24 ms-mt-24">
      <div class="ms-flex ms-items-center ms-justify-center ms-gap-2.5 ms-space-y-0">
        <button class="ms-btn ms-btn-primary" type="submit">
          Submit
        </button>
        <button class="ms-btn ms-btn-outline-secondary" type="button" v-on:click="clear">
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
        errors.value.name = 'Name is';
      } else if (formData.value.name.length < 2) {
        errors.value.name = 'Name must be at least 2 characters';
      } else {
        delete errors.value.name;
      }
      break;

    case 'username':
      if (!formData.value.username.trim()) {
        errors.value.username = 'Username is';
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
        errors.value.email = 'Email is';
      } else if (!/^\S+v-on:\S+\.\S+$/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
      } else {
        delete errors.value.email;
      }
      break;

    case 'phone':
      const phone = formData.value.phone;
      if (phone === null || isNaN(phone)) {
        errors.value.phone = 'Phone is';
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
    errors.value.password = 'Password is';
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
