{{-- Just here as a binder for dynamically rendered content. --}}
<script>
    window.posthogApiKey = @json(config('lelodactyl.posthog_api'));
</script>