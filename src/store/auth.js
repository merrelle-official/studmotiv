import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuth = defineStore("auth", () => {
    const isAuth = ref(false)
    const isPopupOpened = ref(false)

    return { isAuth,  isPopupOpened}
})