<script>
    import "../app.pcss";
    import "../lib/styles/highlight-js.css";   
    import "../lib/styles/app.css";   
    import { inject } from '@vercel/analytics';
    import { dev } from '$app/environment';

    inject({ mode: dev ? 'development' : 'production' });

</script>

<slot></slot>