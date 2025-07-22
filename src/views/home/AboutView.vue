<template>
  <!DOCTYPE html>
  <div class="my-form-container">
    <h2 class="my-form-title">Registration Form</h2>
    <form>
      <!-- Row 1: Name -->
      <div class="my-row">
        <div class="my-col my-col-6">
          <label class="my-form-label" for="firstName">First Name</label>
          <input type="text" class="my-form-control" id="firstName" placeholder="Enter first name" required>
        </div>
        <div class="my-col my-col-6">
          <label class="my-form-label" for="lastName">Last Name</label>
          <input type="text" class="my-form-control" id="lastName" placeholder="Enter last name" required>
        </div>
      </div>

      <!-- Row 2: Contact Info -->
      <div class="my-row">
        <div class="my-col my-col-6">
          <label class="my-form-label" for="email">Email Address</label>
          <input type="email" class="my-form-control" id="email" placeholder="Enter email" required>
        </div>
        <div class="my-col my-col-6">
          <label class="my-form-label" for="phone">Phone Number</label>
          <input type="tel" class="my-form-control" id="phone" placeholder="Enter phone number">
        </div>
      </div>

      <!-- Row 3: Address -->
      <div class="my-row">
        <div class="my-col my-col-12">
          <label class="my-form-label" for="address">Street Address</label>
          <input type="text" class="my-form-control" id="address" placeholder="Enter street address">
        </div>
      </div>

      <!-- Row 4: City/State/Zip -->
      <div class="my-row">
        <div class="my-col my-col-5">
          <label class="my-form-label" for="city">City</label>
          <input type="text" class="my-form-control" id="city" placeholder="Enter city">
        </div>
        <div class="my-col my-col-4">
          <label class="my-form-label" for="state">State</label>
          <select class="my-form-control" id="state">
            <option selected>Choose...</option>
            <option>California</option>
            <option>New York</option>
            <option>Texas</option>
            <option>Florida</option>
          </select>
        </div>
      </div>
      <div class="my-col my-col-3">
        <label class="my-form-label" for="zip">ZIP Code</label>
        <input type="text" class="my-form-control" id="zip" placeholder="Enter ZIP">
      </div>

      <!-- Row 5: Password -->
      <div class="my-row">
        <div class="my-col my-col-6">
          <label class="my-form-label" for="password">Password</label>
          <input type="password" class="my-form-control" id="password" placeholder="Create password" required>
        </div>
        <div class="my-col my-col-6">
          <label class="my-form-label" for="confirmPassword">Confirm Password</label>
          <input type="password" class="my-form-control" id="confirmPassword" placeholder="Confirm password" required>
        </div>
      </div>

      <!-- Row 6: About You -->
      <div class="my-row">
        <div class="my-col my-col-12">
          <label class="my-form-label" for="about">About You</label>
          <textarea class="my-form-control" id="about" placeholder="Tell us about yourself"></textarea>
        </div>
      </div>

      <!-- Row 7: Checkbox -->
      <div class="my-row">
        <div class="my-col my-col-12">
          <div class="my-form-check">
            <input type="checkbox" class="my-form-check-input" id="terms">
            <label class="my-form-check-label" for="terms">I agree to the terms and conditions</label>
          </div>
        </div>
      </div>

      <!-- Row 8: Submit Button -->
      <div class="my-row">
        <div class="my-col my-col-12 my-text-center">
          <button type="submit" class="my-btn my-btn-primary my-btn-block">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>
