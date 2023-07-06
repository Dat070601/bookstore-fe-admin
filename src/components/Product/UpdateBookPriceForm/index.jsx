import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const UpdateBookPriceForm = ({ handleChangeInput }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Giá mặc định</FormLabel>
        <Input name="bookDefautPrice" onChange={handleChangeInput} />
      </FormControl>
      <FormControl>
        <FormLabel>Giá sale</FormLabel>
        <Input name="bookSalePrice" onChange={handleChangeInput}/>
      </FormControl>
      <FormControl>
        <FormLabel>Ngày kích hoạt giá sale</FormLabel>
        <Input type="datetime-local" name="activationDate" onChange={handleChangeInput} />
      </FormControl>
      <FormControl>
        <FormLabel>Ngày hết hạn giá sale</FormLabel>
        <Input type="datetime-local" name="expirationDate" onChange={handleChangeInput}/>
      </FormControl>
    </>
  )
}

export default UpdateBookPriceForm