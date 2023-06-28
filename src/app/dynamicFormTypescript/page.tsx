"use client"
import { useState, useEffect } from 'react'
import { Layout, Form } from './components'
import RepositoryImpl from './data/repository_impl/Repository_impl'
import { getInputs } from './lib'
import { Daum } from './module/model/countryList'



const formType1 = getInputs<FormType1>('register')
const formType2 = getInputs<FormType2>('another')

const DynamicFormTs = () => {
	const formExampale1 = (data: unknown) => console.log({ singUp: data })

	const formExampale2 = (data: unknown) => console.log({ singUp: data })

	const initialValuesSignUp: FormType1 = {
		...formType1.initialValues,
		username: '@finemake'
	}
	var service: RepositoryImpl = RepositoryImpl.instance;
	const [posts, setPosts] = useState<Daum[]>([]);

	useEffect(() => {
		getData()
	}, [])

	async function getData() {
		try {
			await service.getCountryData().then((data : any) => setPosts(data));
		} catch (error) {
		}
	}

	return (
		<div className='bg-slate-500'>
			<Layout>
				<Form
					clist={[]}
					{...formType1}
					initialValues={initialValuesSignUp}
					titleForm='Form 1'
					onSubmit={formExampale1}
					labelButtonSubmit='Create account' />

				<Form
					clist={posts}
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