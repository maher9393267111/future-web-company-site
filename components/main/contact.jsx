import React , {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


	const form = useRef();


	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_i1jcckw', 'template_vjvp4qq', form.current, 'Wp9cGzuiKbDFuuVXl')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log( 'error when send message ---->>>',error.text);
		});
	};



    return (
        <div id="contact" className="contact section-bottom-only">
		<div className="container">
			<div className="">
				<h5 className="title-top text-center  text-lg">تواصل معنا</h5>
				<h3></h3>
			</div>
			<div className="box-content">
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<div className="content">
							<h5>العنوان</h5>
							<p>تركيا , اسطنبول</p>
							{/* <h5>Phone</h5>
							<p>+61 3 8376 6284</p> */}
							<h5>الإيميل</h5>
							<p>futureweb9393@gmail.com</p>
						</div>

						
					</div>
					<div className="col-md-8 col-sm-12">
						<div className="content-right">
							<form 
							ref={form} onSubmit={sendEmail}
							className="contact-form" id="contact-form" method="post">
								<div className="row">
									<div className="col">
										<div id="first-name-field">
											<input type="text" placeholder="Name" name="from"/>
										</div>
									</div>
									<div className="col">
										<div id="email-field">
											<input type="email" placeholder="Email Address" name="email"/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div id="subject-field">
											<input
											  name="subject"
											 type="text" placeholder="Subject" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div id="message-field">
											<textarea cols="30" rows="5" id="form-message" name="message" placeholder="Message"></textarea>
										</div>
									</div>
								</div>
								<button className="button" type="submit" id="submit" name="submit">أرسل رسالة</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Contact;
