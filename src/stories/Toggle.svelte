<script>
    import './Toggle.css';

    /**
     * Specify the label text
     */
    export let label = '';

    /**
     * Specify whether the toggle switch is toggled
     */
    export let isToggled = false;

    /**
     * Specify the size of toggle button
     */
    export let size= 'medium';

    /**
     * Set to `true` to disable the button
     */
    export let disabled = false;

    /**
     * Specify the switch color
     */
    export let backgroundColor = "#c2c2c3";

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    /**
     * Optional click handler
     */
    function onClick(event) {
        dispatch('click', event);
    }

    $: dispatch("toggle", isToggled);
</script>

<label class={['toggle-label', `toggle-label--${size}`].join(' ')}>
    <input {disabled} type="checkbox" class="input" bind:checked={isToggled} />
    <div class="toggle" style="backgroundColor: {backgroundColor};" on:click={onClick} />
    {label}
</label>

<style>
.toggle-label {
    --width: 40px;
    --height: calc(var(--width) / 2);
    --radius: calc(var(--height) / 2);
    display: flex;
}

.toggle-label--small {
    --width: 20px;
    font-size: 12px;
    padding: 10px 16px;
}
.toggle-label--medium {
    --width: 40px;
    font-size: 16px;
    padding: 11px 20px;
}
.toggle-label--large {
    --width: 60px;
    font-size: 20px;
    padding: 12px 24px;
}

.toggle {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--radius);
    border: solid 1px #c2c2c3;
    transition: background-color 0.3s ease;
    margin-right: 5px;
    background-color: var(--toggleBackgroundColor, #c2c2c3);
}

.toggle::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    height: var(--height);
    width: var(--height);
    border-radius: var(--radius);
    background-color: var(--toggleButtonColor, #ffffff);
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}
.input {
    display: none;
}

.input:checked + .toggle {
    background-color: var(--toggleCheckedBackgroundColor, #0068FE);
}

.input:checked + .toggle::after {
    transform: translate3d(100%, 0, 0);
}

.input:disabled + .toggle {
    background-color: #efefef;
}


</style>
