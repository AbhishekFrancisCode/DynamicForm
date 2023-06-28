"use client"
import { Layout, Form } from './components'
import { getInputs } from './lib'



const formType1 = getInputs<FormType1>('register')
const formType2 = getInputs<FormType2>('another')

const DynamicFormTs = () => {
	const formExampale1 = (data: unknown) => console.log({ singUp: data })

	const formExampale2 = (data: unknown) => console.log({ another: data })

	const initialValuesSignUp: FormType1 = {
		...formType1.initialValues,
		username: '@finemake'
	}

	return (
		<div className='bg-slate-500'>
			<Layout>
				<Form
					{...formType1}
					initialValues={initialValuesSignUp}
					titleForm='Form 1'
					onSubmit={formExampale1}
					labelButtonSubmit='Create account'
				/>

				<Form
					{...formType2}
					titleForm='Form 2'
					onSubmit={formExampale2}
					labelButtonSubmit='Send info'
				/>
			</Layout>
		</div>
	)
}
export default DynamicFormTs