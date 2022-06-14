import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Currencies, CurrenciesArray, ExpenseTypes, ExpenseTypesArray } from './ExpenseFieldTypes';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, FormHelperText, FormControl, InputLabel, MenuItem, Select, TextField, Stack, Box } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

type ExpenseFormInputs = {
    name: string,
    expenseType: ExpenseTypes,
    amount: number,
    description: string,
    expenseDate: Date,
    currencyISO: Currencies,
};

const ExpenseForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ExpenseFormInputs>();
    const onSubmit: SubmitHandler<ExpenseFormInputs> = (data) => {
        console.log(data);
    }

    const [date, setDate] = useState<Date | null>(new Date());
    const handleDateChange = (newDate: Date | null) => {
        setDate(newDate);
    };

    return (
        <Card>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} id='expense-form'>
                    <Stack spacing={5}>
                        <TextField label='Name' {...register("name", { required: "Name of expense is required" })} placeholder='Enter the expense name here' 
                        error={!!errors.name} helperText={errors.name?.message}></TextField>

                        <FormControl error={!!errors.expenseType}>
                            <InputLabel id='expense-form-expense-type-label'>Expense type</InputLabel>
                            <Select labelId='expense-form-expense-type-label' label='Expense type' {...register("expenseType", { required: "Expense type is required" })}>
                                {ExpenseTypesArray.map((expenseType) => (
                                    <MenuItem key={expenseType} value={expenseType}> {expenseType} </MenuItem> 
                                ))}
                            </Select>
                            <FormHelperText>{errors.expenseType?.message}</FormHelperText>
                        </FormControl>
                        
                        <TextField label='Amount' {...register("amount", { required: "Expense amount is required" })} placeholder='Enter the amount here'
                        error={!!errors.amount} helperText={errors.amount?.message}></TextField>

                        <TextField label='Description' {...register("description")} placeholder='Enter a description here'></TextField>
                        
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DateTimePicker
                                label="Date Time"
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} {...register("expenseDate", { required:"Expense date is required" })} 
                                error={!!errors.expenseDate} helperText={errors.expenseDate?.message}/>}
                            />
                        </LocalizationProvider>

                        <FormControl error={!!errors.currencyISO}>
                            <InputLabel id='expense-form-currency-label'>Currency</InputLabel>
                            <Select labelId='expense-form-currency-label' label='Currency' {...register("currencyISO", { required: "Currency is required" })}>
                                {CurrenciesArray.map((currency) => (
                                    <MenuItem key={currency} value={currency}> {currency} </MenuItem> 
                                ))}
                            </Select>
                            <FormHelperText>{errors.currencyISO?.message}</FormHelperText>
                        </FormControl>
                    </Stack>
                    
                </form>
            </CardContent>
            <CardActions>
                <Box m={1}>
                    <Button type='submit' form='expense-form' variant='contained'>
                        Add Expense
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}

export default ExpenseForm;