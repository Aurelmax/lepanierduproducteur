import PageHero from '../../components/PageHero';
import UserRegistrationForm from '../../components/UserRegistrationForm';

export default function CreateAccount() {
  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Créer votre compte' subtitle='Rejoignez-nous et commencez à commander' />

      <div className='py-16'>
        <div className='container mx-auto px-4'>
          <UserRegistrationForm />
        </div>
      </div>
    </div>
  );
}
