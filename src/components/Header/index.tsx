import { memo } from 'react'
import './styles.css';
import Navbar from '../Navbar';

export default memo(() => (
	
	<div className="header">
		<Navbar/>
		<div className="profileSection">
			<img src="https://media.licdn.com/dms/image/v2/D4D03AQH8GOWRBl0ApQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725115875186?e=1735171200&v=beta&t=sI_s2cMrY75-nqe858zO32pnK9DvBuDY3-8nOeL_cHE" alt="Avatar" className="avatar" />
			<div className="profileText">
				<h1 className="profileName">Weverton Mata</h1>
				<p className="profileBio"> Eu sou Weverton Mata, tenho 22 anos e sou de Ribeirão das Neves, MG. Graduado no curso superior de Gestão de Tecnologia da Informação na PUC-MG e possuo curso técnico de informática pelo IFMG (Instituto Federal de Minas Gerais). </p>
			</div>
		</div>
	</div>
));