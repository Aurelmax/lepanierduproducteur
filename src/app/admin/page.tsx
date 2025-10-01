import AdminPanel from '../../components/AdminPanel';
import PageHero from '../../components/PageHero';
import UpdateManager from '../../components/UpdateManager';

export default function Admin() {
  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Administration' subtitle='Gestion des paniers et compositions' />

      <div className='container mx-auto px-4 py-8'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <UpdateManager />
          </div>
          <div>
            <AdminPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
