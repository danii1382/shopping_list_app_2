import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafbea',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  listItem: {
    padding: 15,
    marginVertical: 6,
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  listItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: '#2c3e50',
  },
  deleteButton: {
    padding: 8,
    marginLeft: 10,
  },
  deleteButtonText: {
    fontSize: 18,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    marginVertical: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  storeList: {
    width: '100%',
    marginVertical: 15,
  },
  storeItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 3,
  },
  storeInfo: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  errorText: {
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: 10,
  },
});
