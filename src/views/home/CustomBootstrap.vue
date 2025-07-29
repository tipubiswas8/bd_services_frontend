<template>
  <div class="my-container-fluid">
    <div class="my-row">
      <div>
        <div class="my-col-12 my-col-sm-10 my-col-md-8 my-col-lg-6 my-col-xl-4 my-col-xxl-2">
          <div class="my-bg-primary">Landing Page</div>
        </div>
      </div>
    </div>
  </div>
<hr>
  <div class="my-container">
    <div class="my-row my-g-3">
      <div class="my-col-12 my-col-sm-10 my-col-md-8 my-col-lg-6 my-col-xl-4 my-col-xxl-2">
        <div class="my-bg-dark">
          <div class="my-col-12 my-col-sm-10 my-col-md-8 my-col-lg-6 my-col-xl-4 my-col-xxl-2">
            <div class="my-bg-primary">1</div>
            <div class="my-bg-secondary">2</div>
            <div class="my-bg-info">3</div>
            <div class="my-bg-success">4</div>
            <div class="my-bg-danger">5</div>
            <div class="my-bg-warning">6</div>
            <div class="my-bg-primary">7</div>
            <div class="my-bg-secondary">8</div>
            <div class="my-bg-info">9</div>
            <div class="my-bg-success">10</div>
            <div class="my-bg-danger">11</div>
            <div class="my-bg-warning">12</div>
          </div>
        </div>
      </div>

      <div class="my-col-12 my-col-md-8 my-col-lg-4">
        <div class="my-row my-g-3">
          <div class="my-col-12 my-col-md-8 my-col-lg-4">
            <div class="my-bg-info">AAA</div>
          </div>
          <div class="my-col-12 my-col-md-4 my-col-lg-8">
            <div class="my-bg-success">BBB</div>
          </div>
        </div>
      </div>

      <div class="my-col-12">
        <div class="my-row my-g-3">
          <div class="my-col-12 my-col-md-8 my-col-lg-4">
            <div class="my-bg-success">CCC</div>
          </div>
          <div class="my-col-12 my-col-md-4 my-col-lg-8">
            <div class="my-bg-warning">DDD</div>
          </div>
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

  <h1 class="my-text-center">Form-2</h1>
  <form @submit.prevent="submitForm">
    <div class="my-container">
      <!-- Layout changes based on screen size -->
      <div class="my-row">
        <!-- Extra small (xs) and small (sm) - single column -->
        <!-- Medium (md) - label and input on same line -->
        <!-- Large (lg) - 2 columns (left and right) -->
        <!-- Extra large (xl) - 3 columns -->
        <!-- Extra extra large (xxl) - 4 columns -->

        <!-- Column 1 - appears in all layouts -->
        <div class="my-col-12 my-col-md-6 my-col-lg-4 my-col-xl-3 my-col-xxl-3">
          <!-- Name Field -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="name">Name:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
              <input class="my-form-control" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
                @input="validateField('name')" :class="{ 'my-text-danger': errors.name }" />
              <div v-if="errors.name" class="my-mb-1 my-text-danger">{{ errors.name }}</div>
            </div>
          </div>

          <!-- Email Field -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="email">Email:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
              <input class="my-form-control" v-model="formData.email" id="email" type="text"
                @blur="validateField('email')" @input="validateField('email')"
                :class="{ 'my-text-danger': errors.email }" />
              <div v-if="errors.email" class="my-mb-1 my-text-danger">{{ errors.email }}</div>
            </div>
          </div>
        </div>

        <!-- Column 2 - appears in all layouts -->
        <div class="my-col-12 my-col-md-6 my-col-lg-4 my-col-xl-3 my-col-xxl-3">
          <!-- Username Field -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="username">Username:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
              <input class="my-form-control" v-model="formData.username" id="username" type="text"
                @blur="validateField('username')" @input="validateField('username')"
                :class="{ 'my-text-danger': errors.username }" />
              <div v-if="errors.username" class="my-mb-1 my-text-danger">{{ errors.username }}</div>
            </div>
          </div>

          <!-- Phone Field -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="phone">Phone:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
              <input class="my-form-control" v-model="formData.phone" id="phone" type="text"
                @blur="validateField('phone')" @input="validateField('phone')"
                :class="{ 'my-text-danger': errors.phone }" />
              <div v-if="errors.phone" class="my-mb-1 my-text-danger">{{ errors.phone }}</div>
            </div>
          </div>
        </div>

        <!-- Column 3 - hidden on md, shown on lg and up -->
        <div class="my-col-12 my-col-lg-4 my-col-xl-3 my-col-xxl-3 d-md-none">
          <!-- Password Field -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="password">Password:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
              <input class="my-form-control" v-model="formData.password" id="password" type="text"
                @blur="validateField('password')" @input="validateField('password')"
                :class="{ 'my-text-danger': errors.password }" />
              <div v-if="errors.password" class="my-mb-1 my-text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="confirm_password">Confirm Password:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
              <input class="my-form-control" v-model="formData.confirm_password" id="confirm_password" type="text"
                @blur="validateField('confirm_password')" @input="validateField('confirm_password')"
                :class="{ 'my-text-danger': errors.confirm_password }" />
              <div v-if="errors.confirm_password" class="my-mb-1 my-text-danger">{{ errors.confirm_password }}</div>
            </div>
          </div>
        </div>

        <!-- Column 4 - hidden on md and lg, shown on xl and up -->
        <div class="my-col-12 my-col-xl-3 my-col-xxl-3 d-md-none d-lg-none">
          <!-- Role Section -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-md-4 my-col-lg-12">
              <label class="my-form-label my-required" for="role">Role:</label>
            </div>
            <div class="my-col-12 my-col-md-8 my-col-lg-12">
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

          <!-- Agreement Checkbox -->
          <div class="my-row my-mb-2">
            <div class="my-col-12 my-col-lg-12">
              <div style="display: flex; align-items: center;">
                <input class="my-form-check-input" v-model="formData.agree" id="agree" type="checkbox"
                  v-on:change="validateField('agree')" :class="{ 'text-danger': errors.agree }" />
                <label class="my-form-label" for="agree" style="margin-left: 8px;">Do you agree to our terms?</label>
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

  <h1 class="my-text-center">Form-3</h1>
  <form @submit.prevent="submitForm">
    <div class="my-container">
      <div class="my-row">
        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-4 my-col-xxl-3">
          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="name">Name:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
                @input="validateField('name')" :class="{ 'my-text-danger': errors.name }" />
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.name" class="my-mb-1 my-text-danger">{{ errors.name }}</div>
            </div>
          </div>

          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="email">Email:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.email" id="email" type="text"
                @blur="validateField('email')" @input="validateField('email')"
                :class="{ 'my-text-danger': errors.email }" />
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.email" class="my-mb-1 my-text-danger">{{ errors.email }}</div>
            </div>
          </div>

          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="password">Password:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.password" id="password" type="text"
                @blur="validateField('password')" @input="validateField('password')"
                :class="{ 'my-text-danger': errors.password }" />
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.password" class="my-mb-1 my-text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="role">Role:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <select class="my-form-select" v-model="formData.role" id="role" v-on:blur="validateField('role')"
                v-on:change="validateField('role')">
                <option value="" disabled>Select a role</option>
                <option v-for="item in items" :key="item.value" :value="item.value">
                  {{ item.text }}
                </option>
              </select>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.role" class="my-mb-1 my-text-danger">{{ errors.role }}</div>
            </div>
          </div>
        </div>

        <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-4 my-col-xxl-3">
          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="username">Username:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.username" id="username" type="text"
                @blur="validateField('username')" @input="validateField('username')"
                :class="{ 'my-text-danger': errors.username }" />
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.username" class="my-mb-1 my-text-danger">{{ errors.username }}</div>
            </div>
          </div>

          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="phone">Phone:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.phone" id="phone" type="text"
                @blur="validateField('phone')" @input="validateField('phone')"
                :class="{ 'my-text-danger': errors.phone }" />
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.phone" class="my-mb-1 my-text-danger">{{ errors.phone }}</div>
            </div>
          </div>

          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label my-required" for="confirm_password">Confirm Password:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.confirm_password" id="confirm_password" type="text"
                @blur="validateField('confirm_password')" @input="validateField('confirm_password')"
                :class="{ 'my-text-danger': errors.confirm_password }" />
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.confirm_password" class="my-mb-1 my-text-danger">{{ errors.confirm_password }}</div>
            </div>
          </div>

          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"
              style="display: flex; align-items: center; justify-content: start;">
              <input class="my-form-check-input" v-model="formData.agree" id="agree" type="checkbox"
                v-on:change="validateField('agree')" :class="{ 'text-danger': errors.agree }" />
              <label class="my-form-label my-ms-2" for="agree">Do you agree to our terms?</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4"></div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <div v-if="errors.agree" class="my-mb-1 my-text-danger">{{ errors.agree }}</div>
            </div>
          </div>
        </div>

        <div class="my-col-12 my-col-xl-4 my-col-xxl-3">
          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label" for="address">Address:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.address" id="address" type="text" />
            </div>
          </div>
        </div>

        <div class="my-col-12 my-col-xxl-3">
          <div class="my-row my-mb-2">
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-4 my-col-xl-4 my-col-xxl-4">
              <label class="my-form-label" for="city">City:</label>
            </div>
            <div class="my-col-sm-12 my-col-md-12 my-col-lg-8 my-col-xl-8 my-col-xxl-8">
              <input class="my-form-control" v-model="formData.city" id="city" type="text" />
            </div>
          </div>
        </div>

      </div>
    </div>
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

  <h1 class="my-text-center">Form-4</h1>
  <form @submit.prevent="submitForm">
    <div class="my-container">
      <div class="my-row">
        <!-- Left Column -->
        <div class="my-col-sm-12 my-col-md-6 my-col-lg-6 my-col-xl-6 my-col-xxl-6">
          <!-- Name Field -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="name">Name:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <input class="my-form-control" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
                @input="validateField('name')" :class="{ 'my-text-danger': errors.name }" />
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Name Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.name" class="my-mb-1 my-text-danger">{{ errors.name }}</div>
            </div>
          </div>

          <!-- Email Field -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="email">Email:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <input class="my-form-control" v-model="formData.email" id="email" type="text"
                @blur="validateField('email')" @input="validateField('email')"
                :class="{ 'my-text-danger': errors.email }" />
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Email Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.email" class="my-mb-1 my-text-danger">{{ errors.email }}</div>
            </div>
          </div>

          <!-- Password Field -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="password">Password:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <input class="my-form-control" v-model="formData.password" id="password" type="text"
                @blur="validateField('password')" @input="validateField('password')"
                :class="{ 'my-text-danger': errors.password }" />
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Password Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.password" class="my-mb-1 my-text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <!-- Role Section -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="role">Role:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <select class="my-form-select" v-model="formData.role" id="role" v-on:blur="validateField('role')"
                v-on:change="validateField('role')">
                <option value="" disabled>Select a role</option>
                <option v-for="item in items" :key="item.value" :value="item.value">
                  {{ item.text }}
                </option>
              </select>
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Role Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.role" class="my-mb-1 my-text-danger">{{ errors.role }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="my-col-sm-12 my-col-md-6 my-col-lg-6 my-col-xl-6 my-col-xxl-6">
          <!-- Username Field -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="username">Username:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <input class="my-form-control" v-model="formData.username" id="username" type="text"
                @blur="validateField('username')" @input="validateField('username')"
                :class="{ 'my-text-danger': errors.username }" />
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Username Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.username" class="my-mb-1 my-text-danger">{{ errors.username }}</div>
            </div>
          </div>

          <!-- Phone Field -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="phone">Phone:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <input class="my-form-control" v-model="formData.phone" id="phone" type="text"
                @blur="validateField('phone')" @input="validateField('phone')"
                :class="{ 'my-text-danger': errors.phone }" />
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Phone Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.phone" class="my-mb-1 my-text-danger">{{ errors.phone }}</div>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="my-row my-mb-2">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3">
              <label class="my-form-label my-required" for="confirm_password">Confirm Password:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <input class="my-form-control" v-model="formData.confirm_password" id="confirm_password" type="text"
                @blur="validateField('confirm_password')" @input="validateField('confirm_password')"
                :class="{ 'my-text-danger': errors.confirm_password }" />
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-12 my-col-md-4 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Confirm Password Error message -->
            <div class="my-col-sm-12 my-col-md-8 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <div v-if="errors.confirm_password" class="my-mb-1 my-text-danger">{{ errors.confirm_password }}</div>
            </div>
          </div>

          <!-- Agreement Checkbox -->
          <div class="my-row my-mb-2">
            <!-- Input -->
            <div class="my-col-sm-6 my-col-md-6 my-col-lg-3 my-col-xl-3 my-col-xxl-3"
              style="display: flex; align-items: center; justify-content: end;">
              <input class="my-form-check-input" v-model="formData.agree" id="agree" type="checkbox"
                v-on:change="validateField('agree')" :class="{ 'text-danger': errors.agree }" />
            </div>
            <!-- Label -->
            <div class="my-col-sm-6 my-col-md-6 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
              <label class="my-form-label" for="agree">Do you agree to our terms?</label>
            </div>
            <!-- Spacer for error alignment -->
            <div class="my-col-sm-6 my-col-md-6 my-col-lg-3 my-col-xl-3 my-col-xxl-3"></div>
            <!-- Agreement Error message -->
            <div class="my-col-sm-6 my-col-md-6 my-col-lg-9 my-col-xl-9 my-col-xxl-9">
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

    <h1 class="my-text-center">Form-5</h1>
    <div class="my-container">
      <div class="my-row">
        <!-- Left Column -->
        <div class="my-col-sm-12 my-col-md-6">
          <!-- Name Field -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="name">Name:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-control" v-model="formData.name" id="name" type="text" @blur="validateField('name')"
                @input="validateField('name')" :class="{ 'my-text-danger': errors.name }" />
              <div v-if="errors.name" class="my-text-danger my-mt-1">{{ errors.name }}</div>
            </div>
          </div>

          <!-- Email Field -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="email">Email:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-control" v-model="formData.name" id="email" type="text"
                @blur="validateField('email')" @input="validateField('email')"
                :class="{ 'my-text-danger': errors.email }" />
              <div v-if="errors.email" class="my-text-danger my-mt-1">{{ errors.email }}</div>
            </div>
          </div>

          <!-- Password Field -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="password">Password:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-control" v-model="formData.password" id="password" type="text"
                @blur="validateField('password')" @input="validateField('password')"
                :class="{ 'my-text-danger': errors.password }" />
              <div v-if="errors.password" class="my-text-danger my-mt-1">{{ errors.password }}</div>
            </div>
          </div>

          <!-- Role Section -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="role">Role:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <select class="my-form-select" v-model="formData.role" id="role" v-on:blur="validateField('role')"
                v-on:change="validateField('role')">
                <option value="" disabled>Select a role</option>
                <option v-for="item in items" :key="item.value" :value="item.value">
                  {{ item.text }}
                </option>
              </select>
              <div v-if="errors.role" class="my-text-danger my-mt-1">{{ errors.role }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="my-col-sm-12 my-col-md-6">
          <!-- Username Field -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="username">Username:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-control" v-model="formData.username" id="username" type="text"
                @blur="validateField('username')" @input="validateField('username')"
                :class="{ 'my-text-danger': errors.username }" />
              <div v-if="errors.username" class="my-text-danger my-mt-1">{{ errors.username }}</div>
            </div>
          </div>

          <!-- Phone Field -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="phone">Phone:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-control" v-model="formData.phone" id="phone" type="text"
                @blur="validateField('phone')" @input="validateField('phone')"
                :class="{ 'my-text-danger': errors.phone }" />
              <div v-if="errors.phone" class="my-text-danger my-mt-1">{{ errors.phone }}</div>
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="confirm_password">Confirm Password:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-control" v-model="formData.confirm_password" id="c" type="text"
                @blur="validateField('confirm_password')" @input="validateField('confirm_password')"
                :class="{ 'my-text-danger': errors.confirm_password }" />
              <div v-if="errors.confirm_password" class="my-text-danger my-mt-1">{{ errors.confirm_password }}</div>
            </div>
          </div>

          <!-- Agreement Checkbox -->
          <div class="my-row my-mb-3">
            <!-- Label -->
            <div class="my-col-sm-12 my-col-md-4">
              <label class="my-form-label my-required" for="agree">Do you agree to our terms?:</label>
            </div>
            <!-- Input -->
            <div class="my-col-sm-12 my-col-md-8">
              <input class="my-form-check-input" v-model="formData.agree" id="agree" type="checkbox"
                v-on:change="validateField('agree')" :class="{ 'text-danger': errors.agree }" />
              <div v-if="errors.agree" class="my-text-danger my-mt-1">{{ errors.agree }}</div>
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
    </div>
  </form>

  <h1 class="my-text-center">Form-6</h1>
  <form>
    <div class="my-container my-5">
      <div class="my-row">
        <div class="my-col-sm-12 my-col-md-6 my-col-lg-8 my-col-xl-9 my-col-xxl-10">
          <label for="textInput" class="my-form-label">Responsive</label>
          <input type="text" class="my-form-control" id="textInput" placeholder="Enter text">
        </div>
        <div class="my-col-sm-12 my-col-md-6 my-col-lg-4 my-col-xl-3 my-col-xxl-2">
          <label for="textInput" class="my-form-label">Responsive</label>
          <input type="text" class="my-form-control" id="textInput" placeholder="Enter text">
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-md-12">
          <div class="my-row">
            <div class="my-col-md-6">
              <label for="textInput" class="my-form-label">Text1</label>
              <input type="text" class="my-form-control" id="textInput" placeholder="Enter text">
            </div>
            <div class="my-col-md-6">
              <label for="textInput" class="my-form-label">Text2</label>
              <input type="text" class="my-form-control" id="textInput" placeholder="Enter text">
            </div>
          </div>
        </div>

        <div class="my-col-md-6">
          <label for="textInput" class="my-form-label">Text</label>
          <input type="text" class="my-form-control" id="textInput" placeholder="Enter text">
        </div>

        <div class="my-col-md-6">
          <label for="emailInput" class="my-form-label">Email</label>
          <input type="email" class="my-form-control" id="emailInput" placeholder="Enter email">
        </div>

        <div class="my-col-md-6">
          <label for="passwordInput" class="my-form-label">Password</label>
          <input type="password" class="my-form-control" id="passwordInput" placeholder="Enter password">
        </div>

        <div class="my-col-md-6">
          <label for="numberInput" class="my-form-label">Number</label>
          <input type="number" class="my-form-control" id="numberInput" placeholder="Enter number">
        </div>

        <div class="my-col-md-6">
          <label for="telInput" class="my-form-label">Phone</label>
          <input type="tel" class="my-form-control" id="telInput" placeholder="Enter phone number">
        </div>

        <div class="my-col-md-6">
          <label for="urlInput" class="my-form-label">URL</label>
          <input type="url" class="my-form-control" id="urlInput" placeholder="Enter website URL">
        </div>

        <div class="my-col-md-6">
          <label for="dateInput" class="my-form-label">Date</label>
          <input type="date" class="my-form-control" id="dateInput">
        </div>

        <div class="my-col-md-6">
          <label for="timeInput" class="my-form-label">Time</label>
          <input type="time" class="my-form-control" id="timeInput">
        </div>

        <div class="my-col-md-6">
          <label for="datetimeInput" class="my-form-label">Datetime-local</label>
          <input type="datetime-local" class="my-form-control" id="datetimeInput">
        </div>

        <div class="my-col-md-6">
          <label for="monthInput" class="my-form-label">Month</label>
          <input type="month" class="my-form-control" id="monthInput">
        </div>

        <div class="my-col-md-6">
          <label for="weekInput" class="my-form-label">Week</label>
          <input type="week" class="my-form-control" id="weekInput">
        </div>

        <div class="my-col-md-6">
          <label for="colorInput" class="my-form-label">Color</label>
          <input type="color" class="my-form-control my-form-control-color" id="colorInput" value="#563d7c"
            title="Choose your color">
        </div>

        <div class="my-col-md-6">
          <label for="rangeInput" class="my-form-label">Range</label>
          <input type="range" class="my-form-range" id="rangeInput" min="0" max="100">
        </div>

        <div class="my-col-md-6">
          <label for="fileInput" class="my-form-label">File Upload</label>
          <input class="my-form-control" type="file" id="fileInput">
        </div>

        <div class="my-col-md-6">
          <label for="selectInput" class="my-form-label">Select</label>
          <select class="my-form-select" id="selectInput">
            <option selected disabled>Choose option</option>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
          </select>
        </div>

        <div class="my-col-12">
          <label for="textareaInput" class="my-form-label">Textarea</label>
          <textarea class="my-form-control" id="textareaInput" rows="3" placeholder="Enter description..."></textarea>
        </div>

        <div class="my-col-md-6">
          <label class="my-form-label d-block">Radio Buttons</label>
          <div class="my-form-check my-form-check-inline">
            <input class="my-form-check-input" type="radio" name="radioGroup" id="radio1" value="option1">
            <label class="my-form-check-label" for="radio1">Option 1</label>
          </div>
          <div class="my-form-check my-form-check-inline">
            <input class="my-form-check-input" type="radio" name="radioGroup" id="radio2" value="option2">
            <label class="my-form-check-label" for="radio2">Option 2</label>
          </div>
        </div>

        <div class="my-col-md-6">
          <label class="my-form-label d-block">Checkboxes</label>
          <div class="my-form-check my-form-check-inline">
            <input class="my-form-check-input" type="checkbox" id="check1" value="check1">
            <label class="my-form-check-label" for="check1">Check 1</label>
          </div>
          <div class="my-form-check my-form-check-inline">
            <input class="my-form-check-input" type="checkbox" id="check2" value="check2">
            <label class="my-form-check-label" for="check2">Check 2</label>
          </div>
        </div>

        <div class="my-col-12">
          <div class="my-form-check">
            <input class="my-form-check-input" type="checkbox" id="termsCheck">
            <label class="my-form-check-label" for="termsCheck">
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        <div class="my-col-12 text-center">
          <button type="submit" class="my-btn my-btn-primary mt-3">Submit</button>
        </div>
      </div>
    </div>
  </form>

  <div class="my-container">
    <h1 class="my-text-center">Form-7</h1>
    <h2>Responsive Form with All Input Types</h2>
    <form>
      <div class="my-row">
        <div class="my-col-md-12">
          <!-- left side  -->
          <div class="my-col-md-6">
            <label for="firstName" class="my-form-label">First Name</label>
            <input type="text" class="my-form-control" id="firstName" placeholder="Enter your first name">
          </div>
          <!-- right side -->
          <div class="my-col-md-6">
            <label for="lastName" class="my-form-label">Last Name</label>
            <input type="text" class="my-form-control" id="lastName" placeholder="Enter your last name">
          </div>
        </div>
      </div>
      <div class="my-row">
        <div class="my-col-md-6 my-col-12">
          <label for="firstName" class="my-form-label">First Name</label>
          <input type="text" class="my-form-control" id="firstName" placeholder="Enter your first name">
        </div>
        <div class="my-col-md-6 my-col-12">
          <label for="lastName" class="my-form-label">Last Name</label>
          <input type="text" class="my-form-control" id="lastName" placeholder="Enter your last name">
        </div>
      </div>
      <div class="my-row">
        <div class="my-col-12">
          <label for="email" class="my-form-label">Email address</label>
          <input type="email" class="my-form-control" id="email" placeholder="name@example.com">
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-md-6 my-col-12">
          <label for="password" class="my-form-label">Password</label>
          <input type="password" class="my-form-control" id="password">
        </div>
        <div class="my-col-md-6 my-col-12">
          <label for="age" class="my-form-label">Age</label>
          <input type="number" class="my-form-control" id="age" min="18">
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-12">
          <label for="message" class="my-form-label">Message</label>
          <textarea class="my-form-textarea" id="message" rows="3"></textarea>
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-md-6 my-col-12">
          <label for="country" class="my-form-label">Country</label>
          <select class="my-form-select" id="country">
            <option selected>Choose...</option>
            <option value="1">United States</option>
            <option value="2">Canada</option>
            <option value="3">Mexico</option>
          </select>
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-lg-4 my-col-sm-12">
          <label for="appointmentDate" class="my-form-label">Appointment Date</label>
          <input type="date" class="my-form-control" id="appointmentDate">
        </div>
        <div class="my-col-lg-4 my-col-sm-12">
          <label for="appointmentTime" class="my-form-label">Appointment Time</label>
          <input type="time" class="my-form-control" id="appointmentTime">
        </div>
        <div class="my-col-lg-4 my-col-sm-12">
          <label for="favoriteColor" class="my-form-label">Favorite Color</label>
          <input type="color" class="my-form-control" id="favoriteColor">
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-12">
          <label class="my-form-label">Gender</label>
          <div class="my-row">
            <div class="my-col">
              <div class="my-form-check">
                <input class="my-form-check-input" type="radio" name="gender" id="male" value="male">
                <label class="my-form-check-label" for="male">
                  Male
                </label>
              </div>
            </div>
            <div class="my-col">
              <div class="my-form-check">
                <input class="my-form-check-input" type="radio" name="gender" id="female" value="female">
                <label class="my-form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>
            <div class="my-col">
              <div class="my-form-check">
                <input class="my-form-check-input" type="radio" name="gender" id="other" value="other">
                <label class="my-form-check-label" for="other">
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-12">
          <div class="my-form-check">
            <input class="my-form-check-input" type="checkbox" value="" id="termsAndConditions">
            <label class="my-form-check-label" for="termsAndConditions">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-12">
          <label for="formFile" class="my-form-label">Upload your resume</label>
          <input class="my-form-control" type="file" id="formFile">
        </div>
      </div>

      <div class="my-row">
        <div class="my-col-12">
          <label for="volumeRange" class="my-form-label">Volume Range</label>
          <input type="range" class="my-form-control" min="0" max="100" id="volumeRange">
        </div>
      </div>

      <input type="hidden" name="userId" value="12345">

      <div class="my-row mt-3">
        <div class="my-col-12">
          <button type="submit" class="my-form-button my-button-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
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
  city: string;
  address: string;
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
  city?: string;
  address?: string;
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
  city: '',
  address: '',
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
