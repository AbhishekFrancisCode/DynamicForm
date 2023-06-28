import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { CustomCheckbox, CustomInput, CustomRadio, CustomSelect } from './widgets'
import { InputProps, SchemaForm } from '../types'
import { useEffect, useState } from 'react'
import { Daum } from '../module/model/countryList'
import RepositoryImpl from '../data/repository_impl/Repository_impl'
import { DropDownList } from '@syncfusion/ej2-react-dropdowns'

interface Props {
	onSubmit: (data: unknown) => void
	labelButtonSubmit?: string
	titleForm?: string
	initialValues: unknown
	validationSchema: SchemaForm
	inputs: InputProps[]
	clist : Daum[]
}

export const Form = ({ ...props }: Props) => {
	const {
		initialValues,
		inputs,
		onSubmit,
		validationSchema,
		titleForm,
		labelButtonSubmit = 'Submit',
		clist
	} = props

	const formMethods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: { ...(initialValues as any) }
	})

	const createInputs = () =>
		inputs.map(({ validations, typeValue, value, ...inputProps }) => {
			switch (inputProps.type) {
				case 'select':
					return <CustomSelect {...inputProps} key={inputProps.name} />
				case 'checkbox':
					return <CustomCheckbox {...inputProps} key={inputProps.name} />
				case 'radio':
					return <CustomRadio {...inputProps} key={inputProps.name} />
				default:
					return <CustomInput {...inputProps} key={inputProps.name} />
			}
		})

	return (
		<FormProvider {...formMethods}>
			<form
				onSubmit={formMethods.handleSubmit(onSubmit)}
				className='bg-secondary rounded-md p-10 pt-5 shadow-2xl shadow-primary/30 flex flex-col gap-2 border border-primary w-full min-h-[390px]'
			>
				{titleForm && (
					<h5 className='font-extrabold text-center text-2xl pb-2 mb-2 border-b border-white/50'>
						{titleForm}
					</h5>
				)}

				<section className='flex-1 flex flex-col gap-3'>{createInputs()}</section>
				{titleForm === "Form 2" ? 				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-4'>
						<label htmlFor={"country"}>{"Country"}</label>
						<select id={"courynt"} className='p-2 rounded flex-1 text-black'>
							<option value=''>--- Select option ---</option>
							{clist &&
								clist.map(({ name }) => (
									<option key={name} value={name}>
										{name}
									</option>
								))}
						</select>
					</div>
				</div> : <></>}
				<button
					className='bg-slate-800 transition-opacity text-white w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4'
					type='submit'
				>
					{labelButtonSubmit}
				</button>
			</form>
		</FormProvider>
	)
}

