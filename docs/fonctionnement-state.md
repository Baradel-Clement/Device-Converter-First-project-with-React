# l'état dans un composant

Les propriétés dont la valeur a vocation a évoluer pendant la vie dd'un composant doivent être postionnées dans son state (état interne du composant)

Le rendu du composant pourra se baser sur cet état.

Les actions de l'utilisateur pourront entrainer une modification du state.

Ces modifications du state devront être entregistrées par l'intermédiaire de la methode setState.

Une modification du state d'un composant entrainera la mise à jour de son rendu (géré automatiquement par React)
