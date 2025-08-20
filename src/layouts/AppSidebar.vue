<template>
    <div class="flex h-screen text-gray-800 dark:text-black">
        <!-- Sidebar -->
        <AppSidebar :is-collapsed="isCollapsed" @toggle="toggleSidebar" />
    
        <!-- Main container -->
        <div class="flex flex-col flex-1">
        <!-- Topbar -->
        <AppTopbar :is-collapsed="isCollapsed" />
    
        <!-- Main content -->
        <main
            :class="[
            'transition-all duration-300 flex-1 overflow-auto bg-gray-50 p-6',
            isCollapsed ? 'ml-20' : 'ml-[17.5rem]',
            'pt-16' // reserve space if Topbar is fixed height
            ]"
        >
            <router-view />
        </main>
        </div>
    </div>
</template>
<script>
import AppSidebar from './AppSidebar.vue'
import AppTopbar from './AppTopbar.vue'
export default {
    components: { AppSidebar, AppTopbar },
    data() {
        return {
            isCollapsed: false
        }
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed
        }
    }
}
</script>