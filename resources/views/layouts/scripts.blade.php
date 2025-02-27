{{-- Just here as a binder for dynamically rendered content. --}}
<script>
    window.posthog_api = @json(config('lelodactyl.posthog_api'));
    window.posthog_url = @json(config('lelodactyl.posthog_url'));
</script>