<script>
    import { about } from "./about";
    import { marked } from "marked";

    
    const headingRenderer = {
    heading(text, level) {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        return `
            <div class="my-h${level}">
            <h${level} id="${escapedText}">
                <a href="#${escapedText}" class="anchor-link">${text}</a>
            </h${level}>
            </div>
        `;
        }
    };

     // Custom renderer for lists to handle nesting
     const listRenderer = {
        list(body, ordered, start) {
            const type = ordered ? 'ol' : 'ul';
            const startAttr = (ordered && start !== 1) ? ` start="${start}"` : '';
            const listClass = ordered ? 'list-decimal' : 'list-disc';
            return `<${type} class="${listClass} list-inside ml-4"${startAttr}>${body}</${type}>`;
        }
     };

    // Custom renderer for list items to handle nested lists
    const listItemRenderer = {
        listitem(text) {
        return `<li>${text}</li>`;
        }
    };

    const linkRenderer = {
        link(href, title, text) {
        const isExternalLink = href.startsWith('http://') || href.startsWith('https://');
        const targetAttr = isExternalLink ? 'target="_blank"' : '';
        const relAttr = isExternalLink ? 'rel="noopener noreferrer"' : '';

        return `<a href="${href}" ${targetAttr} ${relAttr} class="my-link">${text}</a>`;
        }
    };
    // Combine the heading and code block renderers into a single renderer object
    const renderer = { ...listRenderer, ...listItemRenderer,...headingRenderer,...linkRenderer };
</script>

<div id="guide-container" class="mt-12 max-w-4xl m-auto overflow-auto max-h-[calc(100vh-6rem)] ">
    
    <div id="guide" class="px-12">
        {@html marked(about)}
    </div>

    <div class="pb-12"></div>
</div>
