import { NextRequest, NextResponse } from 'next/server';
import { checkForUpdate, triggerManualUpdate } from '../../../utils/updateManager';

/**
 * API endpoint pour mettre à jour les paniers
 * GET /api/update-baskets - Vérifier le statut
 * POST /api/update-baskets - Déclencher une mise à jour
 */
export async function GET(request: NextRequest) {
  try {
    const updateStatus = checkForUpdate();
    
    return NextResponse.json({
      success: true,
      data: updateStatus,
      message: updateStatus.isNewWeek ? 'Mise à jour disponible' : 'Aucune mise à jour nécessaire'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la vérification' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification (optionnel)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const result = await triggerManualUpdate();
    
    return NextResponse.json({
      success: result.success,
      message: result.message,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    );
  }
}
