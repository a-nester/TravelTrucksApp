import { useId, useState } from 'react';
import { initialValues, ValidateSchema } from '../../helpers/validate';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';
import toast from 'react-hot-toast';
import { submitMessage } from '../../helpers/message';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';

export const BookingForm = () => {
  const camper = useSelector(selectCamperById);

  const [filledName, setFilledName] = useState(false);
  const [filledEmail, setFilledEmail] = useState(false);
  const [filledDate, setFilledDate] = useState(false);
  const [filledComment, setFilledComment] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const idName = useId();
  const idEmail = useId();
  const idCalendar = useId();
  const idComment = useId();

  const handleNameChange = evt => {
    const target = evt.currentTarget;
    target.name.value ? setFilledName(true) : setFilledName(false);
    target.email.value ? setFilledEmail(true) : setFilledEmail(false);
    target.comment.value ? setFilledComment(true) : setFilledComment(false);
  };

  const handleDateChange = update => {
    setDateRange(update);

    setFilledDate(!!update);
  };

  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();
    const { name, email } = initialValues;
    const message = submitMessage({
      name,
      email,
      startDate,
      endDate,
      model: camper.name,
      price: camper.price,
      location: camper.location,
    });
    toast.success(message);
  };

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.titleBox}>
        <h3>Book your campervan now</h3>
        <p className={styles.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidateSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} onChange={handleNameChange}>
          <div className={styles.fieldWrapper}>
            <label
              className={`${styles.label} ${
                filledName ? styles.inpFilled : ''
              }`}
              htmlFor={idName}
            >
              Name*
            </label>
            <Field
              className={styles.field}
              name="name"
              type="text"
              id={idName}
              required
            />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label
              className={`${styles.label} ${
                filledEmail ? styles.inpFilled : ''
              }`}
              htmlFor={idEmail}
            >
              Email*
            </label>
            <Field
              className={styles.field}
              name="email"
              type="email"
              id={idEmail}
              required
            />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label
              className={`${styles.label} ${
                filledDate ? styles.inpFilled : ''
              }`}
              htmlFor={idCalendar}
            >
              Booking date*
            </label>
            <DatePicker
              id={idCalendar}
              name="date"
              wrapperClassName={styles.field}
              calendarClassName={styles.calendar}
              selected={startDate}
              shouldCloseOnSelect={true}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd.MM.yyyy"
              selectsRange={true}
              required
            />
          </div>
          <div className={styles.fieldWrapper}>
            <label
              className={`${styles.label} ${
                filledComment ? styles.inpFilled : ''
              }`}
              htmlFor={idComment}
            >
              Comment
            </label>
            <textarea
              id={idComment}
              name="comment"
              className={styles.field && styles.textarea}
            ></textarea>
          </div>
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
