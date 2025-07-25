<template>
  <h1 class="my-text-center">Form-1</h1>

      <div class="my-row">
      <div class="my-col-6">AAA</div>
      <div class="my-col-6">BBB</div>
        <div class="my-col-sm-4">CCC</div>
        <div class="my-col-sm-8">DDD</div>
    </div>
    
  <div class="my-container">
    <div class="my-row">
      <div class="my-col-12 my-col-md-12 my-col-lg-6 my-col-xl-3 my-col-xxl-2">
        <div>Keyword</div>
        <div>Location</div>
        <div>Category</div>
        <div>Posted</div>
        <div>Place Type</div>
        <div>Other Filter</div>
        <div>Clear</div>
      </div>
    </div>


  </div>
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
            <p>3</p>
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
            <p>9</p>
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
            <p>8</p>
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
            <p>7</p>
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
            <p>6</p>
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
            <p>5</p>
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
            <p>4</p>
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
              <span style="margin-left: 8px;">Do you agree to our terms?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
