

export const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
         <lebel>Task</lebel>
         <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
         <lebel>Day & Time</lebel>
         <input type='text' placeholder=' Add Day & Time' />
      </div>
      <div className='form-control'>
         <lebel>Set Reminder</lebel>
         <input type='checkbox' />
      </div>
    </form>
  )
}
