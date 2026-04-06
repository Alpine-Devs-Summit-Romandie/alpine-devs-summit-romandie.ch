import {type Ref, ref} from "vue";

type ContactFormFields = {
  name: string
  email: string
  message: string
  lang: string
}

const useContactFormWeb3 = () => {
  const loading = ref<boolean>(false)
  const formFields: Ref<ContactFormFields> = ref({
    name: '',
    email: '',
    message: '',
    lang: '',
  })
  const formError = ref<string|null>(null)

  async function submitForm(): Promise<boolean> {
    formError.value = null
    loading.value = true

    const formData = new FormData()
    formData.append('access_key', '4839b465-fb3d-46c6-8b51-acf579bb16ee')
    formData.append('name', formFields.value.name)
    formData.append('language', formFields.value.lang)
    formData.append('email', formFields.value.email)
    formData.append('message', formFields.value.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        initFormFields()
      } else {
        const error = await response.json()
        formError.value = error.message
      }
    } catch (error) {
      formError.value = 'An error occurred while submitting the form. Please try again later.'
    } finally {
      loading.value = false
    }

    return formError.value === null
  }

  function initFormFields(): void {
    formFields.value = {
      name: '',
      email: '',
      message: '',
      lang: ''
    }
  }

  return {
    loading,
    formFields,
    submitForm,
    formError,
  }
}

export default useContactFormWeb3
