import { Control, FieldValues, Path } from 'react-hook-form';
import * as yup from 'yup';
import { Expertise } from './enums';
import { MadeInExpertise } from './enums';
import { Subject } from './enums';

const phoneRegExp = /^[0-9]{10}$/;
const websiteRegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

export type FormData = {
  subject: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city?: string;
  website?: string;
  message: string;
  agree: boolean;
  attachment: File | null;
  expertise?: Expertise;
  madeIn?:  MadeInExpertise;
};

export const contactFormSchema = yup.object().shape({
  // Validation du sujet
  subject: yup.string()
    .required('Le sujet est requis')
    .oneOf(
      ['Project', 'Hiring', 'Other'], 
      'Veuillez sélectionner un sujet valide'
    ),

  // Validation du prénom
  firstName: yup.string()
    .required('Le prénom est requis')
    .matches(
      /^[A-Za-zÀ-ÿ\s'-]+$/, 
      'Le prénom ne peut contenir que des lettres, espaces, traits d\'union et apostrophes'
    )
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom ne peut pas dépasser 50 caractères'),

  // Validation du nom de famille
  lastName: yup.string()
    .required('Le nom de famille est requis')
    .matches(
      /^[A-Za-zÀ-ÿ\s'-]+$/, 
      'Le nom ne peut contenir que des lettres, espaces, traits d\'union et apostrophes'
    )
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),

  // Validation de l'email
  email: yup.string()
    .required('L\'email est requis')
    .email('Format d\'email invalide')
    .max(100, 'L\'email ne peut pas dépasser 100 caractères'),

  // Validation du téléphone
  phone: yup.string()
    .required('Le numéro de téléphone est requis')
    .matches(phoneRegExp, 'Numéro de téléphone invalide')
    .min(10, 'Le numéro doit contenir au moins 10 chiffres')
    .max(15, 'Le numéro ne peut pas dépasser 15 chiffres'),

  // Validation de la ville (optionnelle)
  city: yup.string()
    .optional()
    .transform((value) => value?.trim() || undefined)
    .max(100, 'Le nom de la ville ne peut pas dépasser 100 caractères')
    .matches(
      /^[A-Za-zÀ-ÿ\s'-]*$/, 
      'Le nom de la ville ne peut contenir que des lettres, espaces, traits d\'union et apostrophes'
    ),

  // Validation du site web (optionnel)
  website: yup.string()
    .optional()
    .transform((value) => value?.trim() || undefined)
    .test('validWebsite', 'Format d\'URL de site web invalide', (value) => {
      if (!value) return true;
      return websiteRegExp.test(value);
    })
    .max(200, 'L\'URL du site web ne peut pas dépasser 200 caractères'),

  // Validation du message
  message: yup.string()
    .required('Le message est requis')
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),

  // Validation de l'accord de confidentialité
  agree: yup.boolean()
    .required('Vous devez accepter la politique de confidentialité')
    .oneOf([true], 'Vous devez accepter la politique de confidentialité'),

  // Validation de la pièce jointe
  attachment: yup.mixed()
    .nullable()
    // Requis uniquement pour les demandes d'embauche
    .test('required-if-hiring', 'Un CV est requis pour les demandes d\'embauche', function (value) {
      return this.parent.subject !== 'Hiring' || (value instanceof File);
    })
    // Limite de taille de fichier
    .test('file-size', 'La taille du fichier doit être inférieure à 5 Mo', function (value) {
      if (!value) return true;
      return value instanceof File && value.size <= 5 * 1024 * 1024;
    })
    // Types de fichiers autorisés
    .test('file-type', 'Seuls les fichiers PDF, DOC, DOCX et TXT sont autorisés', function (value) {
      if (!value) return true;
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
      ];
      return value instanceof File && allowedTypes.includes(value.type);
    }),
    expertise: yup.string().when('subject', (subject, schema) => {
      if (typeof subject === 'string' && subject === 'Project') {
        return schema
          .required('L\'expertise est requise pour les projets')
          .oneOf(
            Object.values(Expertise) as string[],
            'Veuillez sélectionner une expertise valide'
          );
      }
      return schema.optional();
    }),
    
    
    madeIn: yup.string().when('subject', (subject, schema) => {
      if (typeof subject === 'string' && subject === 'Project') {
        return schema
          .required('Le champ "Made In" est requis pour les projets')
          .oneOf(
            Object.values(MadeInExpertise) as string[],
            'Veuillez sélectionner une option valide'
          );
      }
      return schema.optional();
    }),
    
    
    
    
}) as yup.ObjectSchema<FormData>;

export interface CustomCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  defaultValue?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}