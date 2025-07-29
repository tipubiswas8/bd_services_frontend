<template>

  <div class="ms-grid ms-grid-cols-12 ms-gap-5">
    <div class="ms-col-span-12 ms-md:col-span-3 ms-lg:col-span-2 ms-bg-pink-500">
      div-1
    </div>
    <div class="ms-col-span-12 ms-md:col-span-6 ms-lg:col-span-7">
      <div class="ms-grid ms-grid-cols-12 ms-gap-2">
        <div class="ms-col-span-6 ms-md:col-span-7 ms-lg:col-span-8 ms-bg-green-500">div-2/1</div>
        <div class="ms-col-span-6 ms-md:col-span-5 ms-lg:col-span-4 ms-bg-gray-500">div-2/2</div>
      </div>
    </div>
    <div class="ms-col-span-12 ms-md:col-span-3 ms-lg:col-span-3 ms-bg-blue-500">
      div-3
    </div>
  </div>
  <br>
  <div class="ms-grid ms-grid-cols-12">
    <div
      class="ms-col-span-12 ms-sm:col-span-10 ms-md:col-span-8 ms-lg:col-span-6 ms-xl:col-span-4 ms-2xl:col-span-2 ms-bg-red-500">
      Landing Page1
    </div>
  </div>
  <hr>
  <div>
    <div class="
  ms-w-full
  ms-sm:w-10/12
  ms-md:w-8/12
  ms-lg:w-6/12
  ms-xl:w-4/12
  ms-2xl:w-2/12
  ms-bg-gray-500
">
      Landing Page2
    </div>
  </div>

  <hr>
  <div class="ms-grid ms-grid-rows-12 ms-h-screen">
    <div
      class="ms-row-span-12 ms-sm-row-span-10 ms-md-row-span-8 ms-lg-row-span-6 ms-xl-row-span-4 ms-2xl-row-span-2 ms-bg-green-500">
      Landing Page13
    </div>
  </div>


  <button @click="toggleTheme">Toggle Theme</button>

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

  <br>
  <hr>

  <h1 class="ms-text-center">Grid</h1>
  <div class="ms-bg-yellow-800 ms-text-white">
    <div class="ms-grid ms-grid-cols-4 ms-gap-4">
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">01</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">02</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">03</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">04</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">05</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">06</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">07</div>
      <div class="ms-bg-red-800 ms-p-4 ms-m-2">08</div>
    </div>

    <table class="ms-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
      </tbody>
    </table>
    <table class="ms-table ms-table-bordered ms-table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
      </tbody>
    </table>
    <table class="ms-table ms-table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
        </tr>
      </tbody>
    </table>
    <div class="ms-table-responsive">
      <table class="ms-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
    <table class="ms-table">
      <thead>
        <tr>
          <th class="ms-text-left">Left</th>
          <th class="ms-text-center">Center</th>
          <th class="ms-text-right">Right</th>
        </tr>
      </thead>
    </table>
    <div class="ms-card">
      <div class="ms-card-header">
        Card Title
      </div>
      <div class="ms-card-body">
        <p>Card content goes here</p>
      </div>
      <div class="ms-card-footer">
        Card footer
      </div>
    </div>
    <div class="ms-card">
      <img src="/assets/images.jpg" class="ms-card-img-top" alt="...">
      <div class="ms-card-body">
        <h5>Card Title</h5>
        <p>Card content</p>
      </div>
    </div>
    <div class="ms-card ms-card-primary">
      <div class="ms-card-header">
        Primary Card
      </div>
      <div class="ms-card-body">
        <p>This card has a primary colored left border</p>
      </div>
    </div>
    <div class="ms-card ms-card-horizontal">
      <img src="/assets/images.jpg" class="ms-card-img-left" alt="..." style="height: 200px;">
      <div class="ms-card-body">
        <h5>Horizontal Card</h5>
        <p>This card becomes horizontal on larger screens</p>
      </div>
    </div>
    <div class="ms-card ms-card-shadow-lg">
      <div class="ms-card-body">
        <p>Card with larger shadow</p>
      </div>
    </div>
    <ul class="ms-list-disc">
      <li class="ms-list-item">Item 1</li>
      <li class="ms-list-item">Item 2</li>
      <li class="ms-list-item">Item 3</li>
    </ul>
    <div class="ms-list-group">
      <div class="ms-list-group-item active">Active item</div>
      <div class="ms-list-group-item">Second item</div>
      <div class="ms-list-group-item disabled">Disabled item</div>
    </div>
    <ul class="ms-list-horizontal">
      <li class="ms-list-item">Home</li>
      <li class="ms-list-item">Products</li>
      <li class="ms-list-item">Services</li>
      <li class="ms-list-item">Contact</li>
    </ul>
    <ul class="ms-list-icon">
      <li class="ms-list-item">
        <span class="ms-list-item-icon">📞</span>
        <span>Contact Us</span>
      </li>
      <li class="ms-list-item">
        <span class="ms-list-item-icon">✉️</span>
        <span>Email Us</span>
      </li>
    </ul>
    <ol class="ms-list-group ms-list-group-numbered">
      <li class="ms-list-group-item">First item</li>
      <li class="ms-list-group-item">Second item</li>
      <li class="ms-list-group-item">Third item</li>
    </ol>
    <ul class="ms-list">
      <li class="ms-list-item ms-list-item-success">Success item</li>
      <li class="ms-list-item ms-list-item-danger">Danger item</li>
      <li class="ms-list-item ms-list-item-warning">Warning item</li>
    </ul>
    <img src="/assets/images.jpg" alt="Description" class="ms-img ms-img-fluid">
    <img src="/assets/images.jpg" alt="Avatar" class="ms-img-thumbnail ms-img-circle"
      style="width: 100px; height: 100px;">
    <img src="/assets/images.jpg" alt="Photo" class="ms-img ms-img-rounded ms-img-grayscale">
    <div class="ms-img-bg" style="background-image: url('bg.jpg'); height: 300px;"></div>
    <div class="ms-img-aspect-16x9">
      <img src="/assets/images.jpg" alt="Video" class="ms-img-cover">
    </div>
    <div class="ms-img-overlay" style="width: 100%; height: 300px;">
      <img src="/assets/images.jpg" alt="Hero" class="ms-img-cover">
      <div class="content-on-top" style="position: relative; z-index: 2;">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
}

// Optional: Set theme on mount
onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

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
