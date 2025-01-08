import React from 'react';

const FreelancerCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <img 
          src="https://via.placeholder.com/80" // Substitua com a URL do ícone ou foto do perfil
          alt="Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileDetails}>
          <h3 style={styles.name}>Paulo H. Ribeiro Alves</h3>
          <p style={styles.username}>paulohenrique64 postou em 10/10/24</p>
          <p style={styles.price}>Preço por hora: R$ 40,00</p>
        </div>
      </div>
      <p style={styles.description}>
        Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.
      </p>
      <div style={styles.skills}>
        <button style={styles.skillButton}>Comunicação</button>
        <button style={styles.skillButton}>Inglês</button>
        <button style={styles.skillButton}>Trabalho em equipe</button>
        <button style={styles.skillButton}>C++</button>
        <button style={styles.skillButton}>C#</button>
        <button style={styles.skillButton}>Figma</button>
      </div>
      <button style={styles.contractButton}>Contratar</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  username: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '5px',
  },
  price: {
    fontSize: '16px',
    color: '#28a745',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '20px',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  skillButton: {
    padding: '6px 12px',
    fontSize: '12px',
    backgroundColor: '#e2e2e2',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    color: '#555',
  },
  contractButton: {
    padding: '10px 20px',
    backgroundColor: '#6c5ce7',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default FreelancerCard;