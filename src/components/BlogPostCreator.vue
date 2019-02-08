<template>
    <div class="blog-post-creator">
        <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
        />
    </div>
</template>

<script>
    import 'quill/dist/quill.snow.css'
    import { quillEditor } from 'vue-quill-editor'
    // import { Button, Input, Select } from 'iview'

    export default {
        name: 'BlogPostCreator',
        component: {
            // Button,
            // Input,
            // Select
            quillEditor
        },
        data: () => ({
            content: '',
            editorOption: {
                debug: 'info',
                placeholder: 'Type yor post...',
                readonly: true,
                theme: 'snow'
            }

        })
    }
</script>

<style scoped>

</style>