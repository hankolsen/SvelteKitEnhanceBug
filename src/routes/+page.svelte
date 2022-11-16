<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<form method="POST" use:enhance>
{#if form?.success}
  <p>Successfully logged in! Welcome back</p>
{/if}

<label>Form with use:enhance
  <input name="user" />
</label>
<button type="submit">Submit</button>
{#if form?.missing}<p class="error">User is required</p>{/if}
</form>
<p>Submitting this with 1.0.0-next.548 results in 500 Error and <span>multipart/form-data not supported</span> in the log</p>

<hr >
<form method="POST">
  {#if form?.success}
    <p>Successfully logged in! Welcome back</p>
  {/if}
  
  <label>Old school form 
    <input name="user" />
  </label>
  <button type="submit">Submit</button>
  {#if form?.missing}<p class="error">User is required</p>{/if}
  </form>
  <p>Submitting this works fine</p>

  <style>
    p span {
      font-family: monospace;
    }
  </style>