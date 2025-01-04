<template>
  <section>
    <div class="w-full h-auto">
      <select
        id="bank-selector"
        class="w-full border-2 border-gray-300 font-thin text-sm rounded p-2"
      >
        <option selected disabled>Choose your bank</option>
        <option>ABA Bank</option>
        <option>ACLEDA Bank Plc.</option>
        <option>BRED Bank</option>
        <option>Canadia Bank</option>
        <option>Chip Mong Commercial Bank Plc.</option>
        <option>KB Prasac Bank Plc.</option>
        <option>Sathapana Bank Plc.</option>
        <option>Woori Bank (Cambodia) Plc.</option>
        <option>Wing Bank (Cambodia) Plc.</option>
      </select>
      <div class="space-y-3 mt-3 mb-5">
        <label class="font-semibold text-sm"
          >Enter Your Bank Account Number</label
        >
        <input
          type="text"
          placeholder="0123456789"
          class="w-full border-2 border-gray-300 font-thin text-sm rounded p-2"
        />
      </div>
      <a
        href=""
        class="flex items-center justify-center text-sm font-medium bg-green-400 text-white rounded py-2"
        >Pay USD00.00</a
      >
    </div>
  </section>
</template>
